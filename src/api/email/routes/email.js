'use strict';

/**
 * email router.
 */

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/email',
            handler: 'email.get'
        },
        {
            method: 'POST',
            path: '/email',
            handler: 'email.send'
        }
    ]
}
