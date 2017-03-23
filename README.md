# AngularJS Starter

> A better way to start developing web applications

[![Build Status](https://travis-ci.org/paulo-campos/jekyll-starter.svg?branch=master)](https://travis-ci.org/paulo-campos/jekyll-starter) [![devDependencies Status](https://david-dm.org/paulo-campos/jekyll-starter/dev-status.svg)](https://david-dm.org/paulo-campos/jekyll-starter?type=dev)

This project aims to streamline starting an application in AngularJS

### Features

###### Added for development
- Management of packages for development with [NPM](https://www.npmjs.com/)
- Configuration builds with [Gulp](http://gulpjs.com/)
- CSS compilation with [SASS](http://sass-lang.com/) using [Compass](http://compass-style.org/)
- Javascript compilation with [Uglify](https://www.npmjs.com/package/gulp-uglify)
- Livereload with [Browser Sync](https://www.browsersync.io/)

### Dependencies

There are dependencies required for this project in AngularJS, then to install them or update them, with [NodeJS and your NPM](https://nodejs.org/en/) and [Ruby](http://rubyinstaller.org/)(for Windows) already installed, run the commands:

    npm install -g gulp
    gem install jekyll sass compass

### Installation

For the install all dependencies, run the command:

    npm install

This will:  
- Install the NPM packages

### Structure

    ├── README.md          - Documentation of project  
    ├── package.json       - Environment dependencies management by NPM  
    ├── gulpfile.js        - Initiation of tasks  
    ├── .gitignore         - Tracker skipped files  
    ├── .travis.yml        - Definitions for environment  
    ├── .editorconfig      - Definitions for general syntax code  
    ├── node_modules/      - Development packages  
    ├── jekyll/            - Jekyll configuration  
    ├── gulp/              - Tasks configuration  
    ├── dev/               - Application for development  
    |   ├── index.html     - Main application entry point  
    │   ├── recourses/     - Resources files  
    │   ├── assets/        - Accessories files  
    │   ├── stylesheets/   - SCSS modularized  
    │   ├── scripts/       - Scripts modularized  
    │   ├── _layouts/      - Layouts for pages  
    │   ├── _includes/     - Includes for pages  
    │   ├── _statics/      - Projeto builded  
    ├── .sass-cache/       - Cached by Compass  
    ├── dist/              - Application for distribuition

### Workflow

You can use any of the following commands:

| Commands               | Result                                             |
|------------------------|:--------------------------------------------------:|
|`$ npm run compile:dev` | Compilation of the files for development           |
|`$ npm run compile:dist`| Compilation of the files for distribuition         |
|`$ npm run compile:prod`| Compilation of the files for production            |
|`$ npm run serve:dev`   | Watch the development in browser with livereload   |
|`$ npm run serve:dist`  | Shows the distribuition in browser                 |

### License

[MIT License](http://opensource.org/licenses/mit-license.php)

### Be a jumper!

![alt tag](https://media.giphy.com/media/tc0YcBbzuhKRW/giphy.gif)
