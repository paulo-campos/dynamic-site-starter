JekyllStarter.appController = (() => {
    let element = {
        app : $('.app')
    };
    
    let controller = {
        start : start
    };

    return controller;
    ////////////////////

    function start () {
        element.app.addClass(JekyllStarter.device.define());
    }
})();