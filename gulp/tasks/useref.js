module.exports = plugins => {
    return () => {
        return plugins.gulp.src('./dev/_statics/**/*.html')
            .pipe(plugins.useref())
            .pipe(plugins.if('*.js',  plugins.babel({ presets: ['es2015'] })))
            .pipe(plugins.if('*.js',  plugins.uglify()))
            .pipe(plugins.if('*.css', plugins.cssnano({
                discardComments : { removeAll : true }
            })))
            .pipe(plugins.gulp.dest('./dist/'));
    };
};
