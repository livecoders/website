# livecoders/website

Website for the Live Coders Twitch Team.

## Setup Instructions

This site is built with [Gatsby][]. Make sure [Node.js][] is installed before working on the site.

Clone down the repository and install the dependencies

```shell
git clone https://github.com/livecoders/website.git LCWebsite
cd LCWebsite
npm install
```

Then, to start up a development server, run the `develop` node command.

```shell
npm run develop
```

The site will be spun up on port 8000 and if you update any page, the site will redirected automatically.

## Member Page docs

Every member of the Live Coders will have a markdown file in the `src/members` folder of this repo.

If you want to watch a video on how this works, watch [Live Coders Site: Tutorial on filling out a member page](https://www.youtube.com/watch?v=yLjGvOb6eX0)

Each page consists of the following initially:

```markdown
---
username: csharpfritz
profile: ../img/members/csharpfritz.png
---
```

The username is used for the URL, the header, and the username to your twitch page. The profile is a relative path to where the profile image is located. All images are initally pulled from Twitch, but you can add your own image / update it whenever you wish (Remember to update filename / extension if it changes).

Then you can add even more content in the frontmatter. None of the following are required but include:

- social links:
  - twitter
  - instagram
  - devto
  - github
  - linkedin
  - stackoverflow
  - youtube (needs a full URL as a custom URL requires 100 subs or more on YT)
- schedule: an array of strings for when you stream. Feel free to add text including scheduled streams that you do on a frequent basis
- tags: an array of things you do. This includes programming languages, frameworks, spoken languages, etc
- sites: an array of additional sites you wish to showcase on your page. Limit this to only the URL

And after the frontmatter section, add a paragraph or two talking about what you do / what you do on your stream. You can use either 1st or 3rd person here.

So a full example may look like the following:

```markdown
---
username: csharpfritz
profile: ../img/members/csharpfritz.png
twitter: csharpfritz
instagram: csharpfritz
youtube: https://www.youtube.com/user/jfritz828
schedule:
  - Sundays 10am - 12PM ET
  - Tuesdays 10am - 12PM ET
  - Wednesdays 10am - 12PM ET
  - Thursdays 10am - 12PM ET
  - Fridays 10am - 12PM ET: Fritz Fridays
tags:
  - C#
  - Blazor
sites:
  - https://jeffreyfritz.com
---

Jeffrey T. Fritz – or simply “Fritz” is a Program Manager for Microsoft on the ASP.NET and .NET Community Outreach teams...
```

<!-- Reference link definitions -->
[Gatsby]: http://gatsbyjs.org/ "A NodeJS based static website generator"
[Node.js]: https://nodejs.org "Download and install NodeJS for yout platform"
