# Loads dependency plugins
plugins = require('gulp-load-plugins')
    pattern : ['*'],
    scope   : ['devDependencies']

# Starts the serve
sync = plugins.browserSync.create();

# Imports the builder tasks
getTask = (task) -> require('./tasks/' + task)(plugins, sync);

plugins.gulp.task 'compass', getTask 'compass'
plugins.gulp.task 'clear',   getTask 'clear'
plugins.gulp.task 'copy',    getTask 'copy'
plugins.gulp.task 'useref',  getTask 'useref'

# Sets the register tasks
plugins.gulp.task 'default', () ->
    console.log '==============================='
    console.log '|                             |'
    console.log '|    Use commands:            |'
    console.log '|      $ gulp compile:dev     |'
    console.log '|      $ gulp compile:dist    |'
    console.log '|      $ gulp serve:dev       |'
    console.log '|      $ gulp serve:dist      |'
    console.log '|                             |'
    console.log '==============================='

plugins.gulp.task 'compile:dev',                      (done) -> plugins.runSequence 'compass', done
plugins.gulp.task 'compile:dist', [ 'compile:dev'  ], (done) -> plugins.runSequence 'clear', 'copy', 'useref', done
plugins.gulp.task 'serve:dev',    [ 'compile:dev'  ], (done) -> 
    sync.init
        server :
            baseDir : './dev/_statics',
            routes  : 
                '/node_modules' : './node_modules',
                '/assets'       : './dev/assets',
                '/scripts'      : './dev/scripts',
                '/stylesheets'  : './dev/stylesheets'
    , done
    
    plugins.gulp.watch './dev/stylesheets/**/*.scss', [ 'compass' ]
    plugins.gulp.watch [
        './dev/_statics/**/*',
        './dev/assets/**/*',
        './dev/icons/**/*',
        './dev/scripts/**/*',
        './dev/**/*.{json,js,png}'
    ]
    .on 'change', sync.reload
    

plugins.gulp.task 'serve:dist', [ 'compile:dist' ], (done) ->
    sync.init server : './dist', done   