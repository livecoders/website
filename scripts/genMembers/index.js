require("dotenv").config()
const fetch = require("node-fetch")
const fs = require("fs")
const path = require("path")
const c = require('ansi-colors')
const { getTwitchAccessToken } = require("@jlengstorf/get-twitch-oauth")

const clientId = process.env.TWITCH_CLIENT_ID
const clientSecret = process.env.TWITCH_CLIENT_SECRET
const team = "livecoders"

let teamURL = `https://api.twitch.tv/helix/teams?name=${team}`
let userURL = 'https://api.twitch.tv/helix/users?id='

getTwitchAccessToken({ client_id: clientId, client_secret: clientSecret }).then(
  (resp) => {
    const { access_token } = resp

    // Pull team info from Twitch API
    fetch(teamURL, {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        // grab just username and logo for each member
        let users = data.data[0].users.map((user) => {
          return { name: user.user_name, id: user.user_id }
        })

        let promises = []
        users.forEach(user => {
          promises.push(
            fetch(userURL + user.id, {
              headers: {
                "Client-ID": clientId,
                Authorization: `Bearer ${access_token}`,
              },
            })
            .then((resp) => resp.json())
            .then((userData) => {
              user.logo = userData.data[0].profile_image_url
            })
          )
        })
        return Promise.all(promises)
                      .then(_ => users)
        
      })
      .then(users => {
        console.log(users)
        // grab all of the files currently in src/members/ (existing member pages)
        const files = fs
          .readdirSync(path.join(__dirname, "..", "..", "src", "members"))
          .map((fileName) => fileName.slice(0, -3))
        
        // get files currently in src/members that are no longer on the team
        const nonMembers = files.filter((file) => !users.find(f => f.name === file))
        
        // filter out users that already have pages
        users = users.filter((user) => !files.includes(user.name))

        if (users.length === 0 && nonMembers.length === 0) {
          console.log(c.cyan("No new members to add or remove."))
          return
        }
      
        if (users.length === 0) {
          console.log(c.cyan(`No new members to add.`))
        } else {
          
          console.log(c.cyan(`Identified ${users.length} new members to add. They are:`))
          
          // write new pages for new members
          users.forEach((user) => {
            
            console.log(c.green(user.name))
            
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
        }
      
        if (nonMembers.length === 0) {
          console.log(c.cyan(`No new members to remove.`))
        } else {
          
          console.log(c.cyan(`Identified ${nonMembers.length} new members to remove. They are:`))
         
          // remove members
          nonMembers.forEach((file) => {
            const filePath = path.join(__dirname, "..", "..", "src", "members", `${file}.md`)
            
            console.log(`${c.red(file)}: ${filePath}`)
            
            // remove markdown file
            fs.unlinkSync(filePath)
          })
          
          // get all images for members to remove
          const imagesToRemove = fs
                          .readdirSync(path.join(__dirname, "..", "..", "src", "img", "members"))
                          .filter((fileName) => nonMembers.find((fn) => fn === fileName.split(".").shift()))
          
          imagesToRemove.forEach((file) => {
            fs.unlinkSync(path.join(__dirname, "..", "..", "src", "img", "members", file))
          })
        }
      })
  }
)
