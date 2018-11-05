const db = require('../config');

const Sport = db.model('Sport', {
    name: String,
    image: String
});

module.exports = Sport;