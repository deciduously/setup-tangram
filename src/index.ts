import { getInput, setFailed, setOutput } from "@actions/core";
import runAction from "./action.js";
import * as process from "node:process";

runAction({
  rev: getInput("tangram-rev")
}).then(({ rev }) => {
  setOutput("tangram-rev", rev);
  process.exit(0);
}).catch((error) => {
  setFailed(error);
  process.exit(1);
})
