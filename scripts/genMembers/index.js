require("dotenv").config()
const fetch = require("node-fetch")
const fs = require("fs")
const path = require("path")
const { getTwitchAccessToken } = require("@jlengstorf/get-twitch-oauth")

const clientId = process.env.TWITCH_CLIENT_ID
const clientSecret = process.env.TWITCH_CLIENT_SECRET
const team = "livecoders"

let teamURL = `https://api.twitch.tv/kraken/teams/${team}`

getTwitchAccessToken({ client_id: clientId, client_secret: clientSecret }).then(
  (resp) => {
    const { access_token } = resp

    // Pull team info from Twitch API
    fetch(teamURL, {
      headers: {
        Accept: "application/vnd.twitchtv.v5+json",
        "Client-ID": clientId,
        Authorization: `OAuth ${access_token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // grab just username and logo for each member
        let users = data.users.map((user) => {
          return { name: user.name, logo: user.logo }
        })

        // grab all of the files currently in src/members/ (existing member pages)
        const files = fs
          .readdirSync(path.join(__dirname, "..", "..", "src", "members"))
          .map((fileName) => fileName.slice(0, -3))

        // filter out users that already have pages
        users = users.filter((user) => !files.includes(user.name))

        if (users.length === 0) {
          console.log("No new members")
          return
        }

        // write new pages for new members
        users.forEach((user) => {
          const markdownContent = `---\nusername: ${
            user.name
          }\nprofile: ../img/members/${user.name}.${user.logo
            .split(".")
            .pop()}\n---\n`

          fs.writeFileSync(
            path.join(
              __dirname,
              "..",
              "..",
              "src",
              "members",
              `${user.name}.md`
            ),
            markdownContent
          )

          // Save images
          fetch(user.logo)
            .then((resp) => resp.arrayBuffer())
            .then((buff) => {
              fs.writeFileSync(
                path.join(
                  __dirname,
                  "..",
                  "..",
                  "src",
                  "img",
                  "members",
                  `${user.name}.${user.logo.split(".").pop()}`
                ),
                Buffer.from(buff)
              )
            })
        })
      })
  }
)
