module.exports = plugins => {
    return () => {
        plugins.gulp.src('./dev/share.js')
            .pipe(plugins.gulp.dest('./dist/'));

        plugins.gulp.src('./dev/icons/**/*')
            .pipe(plugins.gulp.dest('./dist/icons/'));

        plugins.gulp.src('./dev/assets/**/*')
            .pipe(plugins.gulp.dest('./dist/assets/'));
    };
};
