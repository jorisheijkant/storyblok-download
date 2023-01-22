# Storyblok download 
This is a simple script to download all your storyblok content. It will download all your stories and assets and save them in a folder structure.

## Installation
You install this script by including it in your project. Call it from any script and make sure you set the correct variables in a `storyblok-dl-config.js` file. The config file should look like this:

```
{
    "token": "YOUR_TOKEN",
    "space": "YOUR_SPACE",
    "data_folder": "/data",
    "media_folder": "/media"
}
```

Never commit your token to a public repository. Import it through environment variables or a config file that you leave out of your repository. Also mind that when you test this script locally in a fork.