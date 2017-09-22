JekyllStarter.device = (() => {
    let device = {
        desktop    : 'device-desktop',
        tablet     : 'device-tablet',
        smartphone : 'device-smartphone'
    };
    ////////////////////

    let helper = {
        define : define
    };

    return helper;
    ////////////////////

    function define () {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return device.desktop;
        else if (
            ($(window).width()  > 768) ||
            ($(window).height() > 768)) {
            return device.tablet;
        }
        
        return device.smartphone;
    }
})();