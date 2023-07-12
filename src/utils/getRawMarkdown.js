import axios from "axios";

export async function getRawMarkdown(repoObj) {
    
    const formatedUrl = repoObj.url.replace("github.com", "raw.githubusercontent.com").concat("/master/README.md");
    const formatedUrlMain = formatedUrl.replace("/master/", "/main/");
    let result = ""

    result = await axios.get(formatedUrl)
    
    return result;

}