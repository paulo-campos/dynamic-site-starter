(() => {
    let base = $('.base');

    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        base.addClass('device-desktop');
    else if (
        ($(window).width()  > 800) ||
        ($(window).height() > 800)) {
        base.addClass('device-tablet');
    }
    else
        base.addClass('device-smartphone');
})();