# Generate OpenGraph Images Script

A workflow to generate OpenGraph images for all of the team members. this is run in the `build.yml` GitHub Actions workflow.

To run this locally:

```
npm install
npm run build
node gen-opengraph-images.js
```

This will create a `dist/members` folder with outputted images. The are not committed to source control, but rather, in the GitHub Actions workflow, these images will be pushed into the `public` directory of the Gatsby site so it can be deployed to Netlify.
