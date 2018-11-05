const Event = require('../models/sportEvent');
const User = require('../models/user');
const {ObjectId} = require('mongodb');


module.exports.createEventMW = (req, res, next) => {
    const event = new Event({
        eventname: req.body.eventname,
        local: req.body.local,
        date: req.body.date,
        limit: req.body.limit,
       // sport: req.body.sport,
      //  organizer: req.body.organizer,
    });

    event
        .save()
        .then(result => {
        console.log(result);
    res.status(201).json({
        message: "Creating new event.",
        createdEvent: result
    });
})
.catch(err => {
        console.log(err);
    res.status(500).json({
        error: err
    });
});
};

module.exports.getEventListMW = (req, res, next) => {
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);

    Event.find()
        .sort({
            eventname: 1
        })
        .skip(skip)
        .limit(limit)
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
                console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

module.exports.listEventsUsers = (req, res, next) => {
    const eventid = ObjectId(req.params.eventid);

    User
        .find({ "events": eventid })
        .exec()
        .then(doc => {
        console.log("From database", doc);
    //if ((typeof req.body.username !== 'undefined') || (req.body.username !== 'null')) {
    if(doc){
        res.status(200).json(doc);
    } else {
        res.status(404).json({message: "No valid entry for username"});
    }
})
.catch(err => {
        console.log(err);
    res.status(500).json({error: err});
});

};

module.exports.getEvent = (req, res, next) => {

    const eventid = req.params.eventid;
    Event
        .find({ "_id": eventid })
        .exec()
        .then(doc => {
        console.log("From database", doc);
    //if ((typeof req.body.username !== 'undefined') || (req.body.username !== 'null')) {
    if(doc){
        res.status(200).json(doc);
    } else {
        res.status(404).json({message: "No valid entry for username"});
    }
})
.catch(err => {
        console.log(err);
    res.status(500).json({error: err});
});
};

module.exports.deleteEvent = (req, res, next) => {
    const eventid = req.params.eventid;
    Event
        .remove({_id: eventid})
        .exec()
        .then(result => {
        res.status(200).json(result);
})
.catch(err => {
        console.log(err);
    res.status(500).json({
        error: err
    });
});
};