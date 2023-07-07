// import * as jsyaml from "js-yaml";
// import fs from "fs";
import content from "../../content.yaml";

export function listRepositoriesFromYaml() {
    try {
        // const doc = jsyaml.loadAll(fs.readFileSync(path || '../../content.yaml', 'utf8'));
        // console.log(doc);
        console.log(content);
        return content;
      } catch (e) {
        console.log(e);
      }
}