//schem para criação da tabela de pokemons
const PokemonCreate = require('../Listing/listing');
//schema para imagems do pokemon
const PokemonCreateImages = require('../Listing/images');

const PokemonList = require('../../scripts');
const PokemonImage = require('../api/pokemon');
//const PokemonImage  = require('../../spider')
const Promise = require('bluebird'); 


 
module.exports = {
	async store(req, res) {
		try {

			for (let i = 0; i < PokemonList.length; i++) {

				await PokemonCreate.create({
					name: PokemonList[i].Name,
					pokedex: PokemonList[i]['Pokedex Number'],
					img: PokemonImage.data.image[i],
					generation: PokemonList[i].Generation,
					evolution: PokemonList[i]['Evolution Stage'],
					family_id: PokemonList[i].FamilyID,
					type_1: PokemonList[i]['Type 1'],
					weather_1: PokemonList[i]['Weather 1'],
					atk: PokemonList[i].ATK,
					def: PokemonList[i].DEF,
					sta: PokemonList[i].STA,
					legendary: PokemonList[i].Legendary
				}); 
			}
		 
 			// //mapeia toda lista de pokemons para criar schema PokemonCreate
			// const createdPromises = PokemonList.map(function(poke){
			// 	// retorna a promisse
			// 	return PokemonCreate.create({
			// 		name: poke.Name,
			// 		pokedex: poke['Pokedex Number'],
			// 		img: '',
			// 		generation: poke.Generation,
			// 		evolution: poke['Evolution Stage'],
			// 		family_id: poke.FamilyID,
			// 		type_1: poke['Type 1'],
			// 		weather_1: poke['Weather 1'],
			// 		atk: poke.ATK,
			// 		def: poke.DEF,
			// 		sta: poke.STA,
			// 		legendary: poke.Legendary
			// 	}); 
			// });
			 

			// Promise.all(createdPromises).then(function(results){
			// 	res.json(results); // only sends when all docs have been created
			// }).then(null); // error handler - pass to `next`

 		} catch (err) {
			console.log(err)
			return res.status(400).send(err);
		}
	},
	async show(req, res) {
		for(i = 0; i < PokemonList.length; i++) {
			//console.log(PokemonList[i]['Pokedex Number'])

		}
		try{
			//console.log(arr[1])
			//console.log(PokemonList.length)
			 const user = await PokemonCreate.find()
			return res.json(user)
		} catch(err) {
			return res.status(400).send(err);
		}
	},
	async createImages(req, res) {
	 
 		try {

  			 
			
			for (let value of PokemonImage.data.image) {

				await PokemonCreate.findOneAndUpdate({
					img: value,

				});
			}

			//return res.json(user)
		} catch(err) {
			return res.status(400).send(err);
		}
	},
	async getimages(req, res) {
	
		try{
			//console.log(arr[1])
			
			 const user = await PokemonCreateImages.find()
			return res.json(user)
		} catch(err) {
			return res.status(400).send(err);
		}
	},
	async destroy(req, res) {
		try {
 			const pokemons = await PokemonCreate.find().remove()
			return res.send(pokemons)
		  } catch (err) {
			console.log(err)
			return res.status(400).send(err)
		  }
	},

	async deleteImagem(req, res) {
		try {
 			const pokemons = await PokemonCreateImages.find().remove()
			return res.send(pokemons)
		  } catch (err) {
			console.log(err)
			return res.status(400).send(err)
		  }
	},
};