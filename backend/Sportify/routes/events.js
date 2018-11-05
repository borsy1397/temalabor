const createEventMW = require('../middlewares/event').createEventMW;
const getEventListMW = require('../middlewares/event').getEventListMW;
const listEventsUsers = require('../middlewares/event').listEventsUsers;
const getEvent = require('../middlewares/event').getEvent;
const deleteEvent = require('../middlewares/event').deleteEvent;


 module.exports = app => {
     app.get('/event',
         getEventListMW
     );


     app.post('/event',
         createEventMW
     );

    app.get('/event/listusers/:eventid',
        listEventsUsers
    );

     app.get('/event/:eventid',
        getEvent
     );

     app.put('/event/:eventid');

     app.delete('/event/:eventid',
        deleteEvent
     );
};
