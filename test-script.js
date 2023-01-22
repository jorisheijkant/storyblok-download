let tokenFile = require("./token.json");
let token = tokenFile.token;
let storyblokDownload = require("./index.js");

storyblokDownload(token, 'test-output/data', 'test-output/media');