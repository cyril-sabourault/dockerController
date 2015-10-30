var Path = require('path');

module.exports = [{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path  : '.',
            redirectToSlash : true,
            index : true
        }
    }
}];
