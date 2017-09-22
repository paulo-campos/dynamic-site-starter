$(document).ready(() => {
    let scopes = Object.keys(JekyllStarter);

    for (let property of scopes) {
        if (property.indexOf('Controller') > -1)
            JekyllStarter[property].start();
    }
});