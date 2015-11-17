var Path = require('path');

module.exports = [{
        method: 'GET',
        path: '/favicon.ico',
        handler: {
            file: './img/favicon.png'
        },
        config: {
            cache: {expiresIn: 86400000, privacy: 'public'}
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path  : '.',
                redirectToSlash : true,
                index : true
            }
        }
    }
];