import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import builtins from "rollup-plugin-node-builtins"
import globals from "rollup-plugin-node-globals"
import replace from "@rollup/plugin-replace"
import React from "react"
import ReactDOM from "react-dom"

const config = {
  input: "src/image.js",
  output: [
    {
      file: "dist/image.js",
      format: "iife",
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      namedExports: {
        "react-dom": Object.keys(ReactDOM),
        react: Object.keys(React),
      },
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    globals(),
    builtins(),
  ],
}

export default config
