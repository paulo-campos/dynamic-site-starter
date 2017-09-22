module.exports = (plugins, sync) ->
    return () ->
        plugins.gulp.src './dev/stylesheets/**/*.{css,map}', read : false
            .pipe plugins.rimraf force : true

        return plugins.gulp.src './dev/stylesheets/**/*.scss'
            .pipe plugins.compass
                sass      : './dev/stylesheets/',
                css       : './dev/stylesheets/',
                relative  : true,
                comments  : true,
                sourcemap : true,
                style     : 'expanded'
            .on 'error', () -> process.exit()
            .pipe plugins.gulp.dest './dev/stylesheets/'
            .pipe sync.stream()