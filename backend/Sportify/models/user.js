const db = require('../config');

const User = db.model('User', {
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    points: Number,
    events: [{type: db.Schema.Types.ObjectId, ref: 'sportEvent'}],
    sports: [{type: db.Schema.Types.ObjectId, ref: 'Sport'}], // favourite sports
    eventsEnd: [{type: db.Schema.Types.ObjectId, ref: 'sportEvent'}],
    eventsSoon: [{type: db.Schema.Types.ObjectId, ref: 'sportEvent'}],
    friends: [{type: db.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = User;