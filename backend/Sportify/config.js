const mongoose = require('mongoose');
mongoose.connect('mongodb://beci:beci@node-sportify-shard-00-00-hc5vx.mongodb.net:27017,node-sportify-shard-00-01-hc5vx.mongodb.net:27017,node-sportify-shard-00-02-hc5vx.mongodb.net:27017/test?ssl=true&replicaSet=node-sportify-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true
});

module.exports = mongoose;