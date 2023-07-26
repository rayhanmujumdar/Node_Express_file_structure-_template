const mongoose = require('mongoose')
/**
 * create a database connection function with mongoose
 * @param {string} url 
 * @returns {mongoose.connect}
 */
const db = (url) => {
    return mongoose.connect(url)
}

module.exports = db