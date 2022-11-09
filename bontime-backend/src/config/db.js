const mongoose = require('mongoose');

const connect =()=>{
    return mongoose.connect(process.env.DB_URL)
}

module.exports = connect;