import { firefox } from "playwright-firefox";
import fs from "fs";
import { fileURLToPath } from 'url';
import path from "path";
const ogReactComponentScript = fs.readFileSync("./dist/image.js", "utf-8")

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const background = Buffer.from(
  fs.readFileSync(
    path.join(__dirname, "..", "..", "src", "img", "home-hero-background.jpg")
  )
).toString("base64")

const lcLogo = Buffer.from(
  fs.readFileSync(
    path.join(__dirname, "..", "..", "src", "img", "live-coder-transparent.png")
  )
).toString("base64")

async function genOpengraphImage(page, name, imageBase64) {
  await page.addScriptTag({
    content: `
      window.username = "${name}";
      window.imgSrc = "${imageBase64}";
      window.bg = "${background}";
      window.lcLogo = "${lcLogo}";
    `,
  })

  await page.addScriptTag({
    content: ogReactComponentScript,
  })

  if (!fs.existsSync(path.join(__dirname, "dist", "members"))) {
    fs.mkdirSync(path.join(__dirname, "dist", "members"))
  }

  await page.screenshot({
    type: "jpeg",
    quality: 75,
    path: path.join(__dirname, "dist", "members", `${name}.jpg`),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  })
}

async function run() {
  const browser = await firefox.launch()
  const page = await browser.newPage()

  page.setViewportSize({
    width: 1200,
    height: 630,
  })

  await page.setContent(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      />
      <style>*{ padding: 0; margin: 0; font-family: "Press Start 2P"; }</style>
    </head>

    <body>
      <div id="opengraph"><div>Opengraph component not rendered yet</div></div>
    </body>
  </html>
  `)

  const members = fs.readdirSync(
    path.join(__dirname, "..", "..", "src", "img", "members")
  )

  for (let member of members) {
    let memberName = member.split(".")[0]
    let memberImageBase64 = Buffer.from(
      fs.readFileSync(
        path.join(__dirname, "..", "..", "src", "img", "members", member)
      )
    ).toString("base64")

    await genOpengraphImage(page, memberName, memberImageBase64)
  }

  await browser.close()
}

run()
