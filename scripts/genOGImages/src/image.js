import React from "react"
import { Textfit } from "react-textfit"
import { render } from "react-dom"

const MemberComponent = () => {
  return (
    <div
      style={{
        width: 1200,
        height: 630,
        padding: 50,
        paddingBottom: 0,
        border: "16px solid #663399",
        fontFamily: '"Press Start 2P", sans-serif',
        boxSizing: "border-box",
        backgroundImage: `url("data:image/png;base64, ${window.bg}")`,
        backgroundSize: "cover",
        color: "white",
        display: "inline-flex",
        textTransform: "uppercase",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: 400,
          height: "auto",
          alignSelf: "center",
          marginTop: -50,
        }}
        src={`data:image/jpeg;base64, ${window.imgSrc}`}
      />
      <div
        style={{
          marginLeft: 50,
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <h1>
          <Textfit mode="single" style={{ width: "100%", textAlign: "center" }}>
            {window.username}
          </Textfit>
        </h1>
        <img
          style={{ width: 350, margin: "0 auto", height: "auto" }}
          src={`data:image/jpeg;base64, ${window.lcLogo}`}
        />
      </div>
    </div>
  )
}

render(<MemberComponent />, document.getElementById("opengraph"))
