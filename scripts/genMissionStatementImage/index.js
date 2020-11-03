const fs = require('fs')
const path = require("path")
const { createCanvas, loadImage } = require('canvas')
const c = require('ansi-colors')

// get all member images
let memberImages = fs.readdirSync(path.join(__dirname, "..", "..", "src", "img", "members"))

console.log(c.cyan(`Identified ${memberImages.length} member images`))

if (memberImages.length > 0) {

  // shuffle the images randomly
  for (let i = memberImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [memberImages[i], memberImages[j]] = [memberImages[j], memberImages[i]];
  }

  // pull 64 images from shuffled list
  memberImages = memberImages.slice(0, 64)

  console.log(c.cyan('Randomly selected 64 member images. They are:'))
  memberImages.forEach((fileName) => console.log(c.green(fileName.split(".").shift())))

  // create canvas for the final image
  const canvas = createCanvas(1600, 400)
  const context = canvas.getContext('2d')

  context.beginPath();
  context.rect(0, 0, 1600, 400);
  context.fillStyle = "#2C1643";
  context.fill();

  let xPos = 0, yPos = 0

  // load all images
  Promise.all(
    memberImages.map((fileName) =>
      loadImage(path.join(__dirname, "..", "..", "src", "img", "members", fileName)))
  ).then((images) => {

    // for each image, draw to canvas
    for (let i = 0; i < images.length; i++) {

      context.drawImage(images[i], xPos + 1, yPos + 1, 98, 98)

      // shift x & y positions
      if (((i + 1) % 16) === 0) {
        yPos += 100
      }
      if (xPos === 1500) {
        xPos = 0
      } else {
        xPos += 100
      }
    }

    // save the file out to disk
    const out = fs.createWriteStream(path.join(__dirname, "..", "..", "src", "img", "livecoders-collage.png"))
    const stream = canvas.createPNGStream()
    stream.pipe(out)
    out.on('finish', () => console.log('The PNG file was created.'))
  })
}
