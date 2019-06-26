const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorCollection = new Schema({
    colorName : {type : String, required : true}
})

module.exports = mongoose.model('colorCollection',colorCollection);