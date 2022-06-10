// Setting up Rollup
// Rollup is a package bundler built with simplicity in mind. It is also very extensible through some available plugins that will give you extra functionality. Let’s install Rollup and all the plugins we’ll need in this project (we’ll also need Babel since it is used internally during transpiling).

// npm i -D rollup rollup-plugin-typescript2 rollup-plugin-css-bundle babel-core babel-runtime

import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

// input – tells Rollup which file is the root file (think of it as the parent of all the other files)
// output – tells Rollup where to bundle your file to and in what format
// plugins – tells Rollup which plugins we want to use along with the configuration for each one
// externals – tells Rollup which modules being used by the package should be supplied by the host environment (wherever it’s being used)

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
  ],
  external: ["react", "react-dom"],
};
