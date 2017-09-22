module.exports = (plugins) ->
    return () ->
        return plugins.gulp.src './dev/_statics/**/*.html' 
            .pipe plugins.useref()
            .pipe plugins.gulp.dest './dist/'