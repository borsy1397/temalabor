const User = require('../models/user');
const Event = require('../models/sportEvent');
const {ObjectId} = require('mongodb');

module.exports.getUserListMW = (req, res, next) => {
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);

    User.find()
        .sort({
            username: 1
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

module.exports.getUserMW = (req, res, next) => {

    const userid = req.params.userid;
    User
        .find({ "_id": userid })
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

module.exports.authUserMW = (req, res, next) => {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }).exec((err, user) => {
        if(user){
            res.status(200).json("Be");
            return next;
        } else {
            res.json("ki");
            return next;
        }
    });
};

module.exports.logoutUserMW = (req, res, next) => {

};

module.exports.registerUserMW = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        points: req.body.points,
    });

    user
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Creating new user.",
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

module.exports.updateUserMW = (req, res, next) => {

};

module.exports.deleteUserMW = (req, res, next) => {
    const userid = req.params.userid;
    User
        .remove({_id: userid})
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

module.exports.addUserToEvent = (req, res, next) => {
    const userid = ObjectId(req.params.userid);
    const eventid = ObjectId(req.params.eventid);

    Event.findOneAndUpdate(
        { "_id" : eventid },
        { $push: { "member" : userid } }
    ).exec();

    User.findOneAndUpdate(
        { "_id" : userid },
        { $push: { "events" : eventid } }
    ).exec();
};

module.exports.listUsersEvents = (req, res, next) => {
    const userid = ObjectId(req.params.userid);

    Event
        .find({ "member": userid })
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