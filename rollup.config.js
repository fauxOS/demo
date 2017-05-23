// import { rollup } from "rollup";
import resolve from "rollup-plugin-node-resolve";
import babili from "rollup-plugin-babili";

export default {
  entry: "src/main.js",
  dest: "dist/build.js",
  moduleName: "demo",
  format: "es",
  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
      browser: true
    }),
    babili({
      comments: false
    })
  ]
};
