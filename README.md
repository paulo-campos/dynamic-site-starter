# Jekyll Starter

> A better way to start siteswith Jekyll

[![Build Status](https://travis-ci.org/paulo-campos/jekyll-starter.svg?branch=master)](https://travis-ci.org/paulo-campos/jekyll-starter) [![devDependencies Status](https://david-dm.org/paulo-campos/jekyll-starter/dev-status.svg)](https://david-dm.org/paulo-campos/jekyll-starter?type=dev) [![dependencies Status](https://david-dm.org/paulo-campos/jekyll-starter/status.svg)](https://david-dm.org/paulo-campos/jekyll-starter)

This project aims to streamline starting an application in Jekyll

### Dependencies

There are dependencies required for this project in Jekyll, then to install them or update them, with [NodeJS and your NPM](https://nodejs.org/en/) and [Ruby](http://rubyinstaller.org/)(for Windows) already installed, run the commands:

    npm install -g gulp
    gem install jekyll sass compass

### Installation

For the install all dependencies, run the command:

    npm install

### Structure

    ├── README.md              - Documentation of project  
    ├── package.json           - Environment dependencies management by NPM  
    ├── gulpfile.js            - Main file for build tasks  
    ├── .gitignore             - Tracker skipped files  
    ├── .travis.yml            - Definitions for environment  
    ├── .editorconfig          - Definitions for general syntax code  
    ├── node_modules/          - Dependencies packages for development  
    ├── jekyll/                - Jekyll configuration  
    ├── gulp/                  - Build tasks configuration  
    ├── dev/                   - Development application  
    |   ├── index.html         - Main application entry point  
    |   ├── share.png          - Default share image  
    |   ├── manifest.json      - Definitions of mobile behavior  
    |   ├── service-worker.js  - Background tasks of project  
    │   ├── icons/             - Icons files  
    │   ├── assets/            - Accessories files  
    │   ├── stylesheets/       - Custom stylesheets  
    │   ├── scripts/           - Scripts modularized  
    │   ├── _layouts/          - Layouts for pages  
    │   ├── _includes/         - Includes for pages  
    │   ├── _statics/          - Projeto builded  
    ├── .sass-cache/           - Cached by Compass  
    ├── dist/                  - Distribution application

### Workflow

You can use any of the following commands:

| Commands                 | Result                                             |
|--------------------------|----------------------------------------------------|
| `$ npm run compile:dev`  | Compilation of the files for development           |
| `$ npm run compile:dist` | Compilation of the files for distribuition         |
| `$ npm run serve:dev`    | Watch the development in browser with livereload   |
| `$ npm run serve:dist`   | Shows the distribuition in browser                 |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be a jumper!

![alt tag](https://media.giphy.com/media/tc0YcBbzuhKRW/giphy.gif)
