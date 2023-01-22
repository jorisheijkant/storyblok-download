let fs = require("fs");
let axios = require("axios");

let baseUrl = "https://api.storyblok.com/v2";

let storyblokDownload = async (token = "", data_folder = "./data", media_folder = "./media") => {
    if(!token) {
        throw new Error("Missing token");
    }

    // Check if data folder exists, otherwise create it 
    if(!fs.existsSync(data_folder)) {
        fs.mkdirSync(data_folder);
    }

    // Check if media folder exists, otherwise create it
    if(!fs.existsSync(media_folder)) {
        fs.mkdirSync(media_folder);
    }

    // Init data object
    let data = {};

    // Get all stories
    let stories = await axios.get(`${baseUrl}/cdn/stories?token=${token}&per_page=100`);
    if(stories && stories.data && stories.data.stories) {
        data.stories = stories.data.stories;
    }

    // Write out the data
    fs.writeFile(`${data_folder}/data.json`, JSON.stringify(data), (err) => {
        if(err) {
            console.log(err);
        }
    })
}

module.exports = storyblokDownload;