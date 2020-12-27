const mongoose = require('mongoose');
const dbConfig = require('../../config/database.config.js');

exports.getStatus = (req, res) => {
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: false
    }).then(() => {
        res.send(`I'm on ${req.hostname}`);
    }).catch(err => {
        res.status(503).send('Internal Server Error');
    });
}