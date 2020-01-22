const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	img: String,

})
 
module.exports = mongoose.model('Pokemon_list_images', UserSchema);