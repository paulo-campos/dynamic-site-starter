module.exports = (plugins, sync) => {
    getTask = task => require('./tasks/' + task)(plugins, sync);
    
    plugins.gulp.task('compass', getTask('compass'));
    plugins.gulp.task('clean',   getTask('clean'));
    plugins.gulp.task('copy',    getTask('copy'));
    plugins.gulp.task('useref',  getTask('useref'));
    ////////////////////

    return {
        compileDev  : done => plugins.runSequence('compass', done),
        compileDist : done => plugins.runSequence('clean', 'copy', 'useref', done),
        serveDev    : done => {
            sync.dev.init({
                server : {
                    baseDir : './dev/_statics',
                    routes  : {
                        '/icons'        : 'dev/icons',
                        '/assets'       : 'dev/assets',
                        '/scripts'      : 'dev/scripts',
                        '/stylesheets'  : 'dev/stylesheets',
                        '/node_modules' : 'node_modules'
                    }
                },
                port : 3000
            }, done);

            plugins.gulp.watch('./dev/stylesheets/**/*.scss', [ 'compass' ]);
            plugins.gulp.watch([
                './dev/_statics/**/*',
                './dev/scripts/**/*.js'
            ])
            .on('change', sync.dev.reload);
        },
        serveDist : done => {
            sync.dist.init({
                server : './dist/',
                port   : 4000
            }, done);
        }
    }
};
