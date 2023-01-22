# Storyblok download 
This is a simple script to download all your storyblok content. It will download all your stories and assets and save them in a folder structure. It's slightly on the opinionated side, but it's easy to change. 

The main concept is that it will output your pages into seperate json files, and will download your media into a seperate folder. These folders you could then upload to a static folder, or include in your build process. 

For instances where you'd like to call the Storyblok API directly, I'd recommend to use Storyblok Bridge: https://www.storyblok.com/cl/storyblok-bridge-v2-beta.

## Installation
You install this script by including it in your project. Call it from any script, make sure you provide three arguments: `token`, `data_folder` (where you want the json to be outputted) and `media_folder` (where you want the media to be outputted).

Never commit your token to a public repository. Import it through environment variables or a config file that you leave out of your repository. Also mind that when you test this script locally in a fork.