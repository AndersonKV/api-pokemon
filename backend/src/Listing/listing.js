const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: String,
	pokedex: { type:String, unique: true },
	img: String,
	generation: String,
	evolution: String,
	family_id: String,
	type_1: String,
	weather_1: String,
	atk: String,
	def: String,
	sta: String,
	legendary: String,
 
})
 
module.exports = mongoose.model('Pokemon_list', UserSchema);