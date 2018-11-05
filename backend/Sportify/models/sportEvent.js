const db = require('../config');

const SportEvent = db.model('SportEvent', {
    eventname: String,
    local: String, // where the sport event is taken place
    date: Date, // when
    limit: Number,
    sport: {type: db.Schema.Types.ObjectId, ref: 'Sport'}, // which sport
    organizer: {type: db.Schema.Types.ObjectId, ref: 'User'},
    member: [{type: db.Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = SportEvent;