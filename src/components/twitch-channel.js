import React from "react"
import {Helmet} from "react-helmet";

const scriptCode = `<script type="text/javascript">
      new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "thelivecoders",
        parent: ["livecoders.dev"]
      });
    </script>`;

export default () => (
  <>
    <div id="twitch-embed"></div>
		<Helmet>
    <script src="https://embed.twitch.tv/embed/v1.js"></script>
		<script src="/js/twitch.js"></script>
		</Helmet>
		
		{/* <section dangerouslySetInnerHTML={{ __html: htmlDecode(scriptCode) }} /> */}
    
  </>
)

