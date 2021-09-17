const path = require("path");
const cpr = require("cpr");
// const json = require("json");
const parentPath = path.resolve(__dirname, "..");
if (path.basename(path.dirname(__dirname)) === "node_modules") {
  cpr(".husky", "../../.husky", {
    deleteFirst: false,
    overwrite: true,
  });
  cpr("commitlint.config.js", "../../commitlint.config.js", {
    deleteFirst: false,
    overwrite: true,
  });
  const packageJson = require("../../package.json");
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  packageJson.scripts.prepare = packageJson.scripts.prepare
    ? packageJson.scripts.prepare + " && husky install"
    : "husky install";
  //   json.
}
