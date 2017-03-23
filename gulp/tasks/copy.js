module.exports = plugins => {
    return () => {
        plugins.gulp.src('./dev/resources/**/*')
            .pipe(plugins.gulp.dest('./dist/resources/'));

        plugins.gulp.src('./dev/assets/**/*')
            .pipe(plugins.gulp.dest('./dist/assets/'));
    };
};
