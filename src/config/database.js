const mongoose = require('mongoose');

const connect = async () => {
    mongoose.connect('mongodb://localhost:27017/twitter_project_dev');
}

module.exports = connect;
