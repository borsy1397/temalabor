const getUserListMW = require('../middlewares/user').getUserListMW;
const getUserMW = require('../middlewares/user').getUserMW;
const registerUserMW = require('../middlewares/user').registerUserMW;
const deleteUserMW = require('../middlewares/user').deleteUserMW;
const authUserMW = require('../middlewares/user').authUserMW;
const addUserToEvent = require('../middlewares/user').addUserToEvent;
const listUsersEvents = require('../middlewares/user').listUsersEvents;

module.exports = (app) => {

    app.get('/user',
        getUserListMW
    );

    app.post('/user/register',
        registerUserMW
    );

    app.post('/user/login',
        authUserMW
    );

    app.post('/user/logout');
    
    app.get('/user/:userid',
        getUserMW
    );  

    app.put('/user/:username');

    app.delete('/user/:userid',
        deleteUserMW
    );

    app.post('/user/apply/:userid/:eventid',
        addUserToEvent
    );

    app.get('/user/listevents/:userid',
        listUsersEvents
    );


};
