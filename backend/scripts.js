const xlsx = require('xlsx');

const wb = xlsx.readFile('PokemonGo.xlsx', {cellDates: true});

const ws = wb.Sheets['Sheet1'];

const data = xlsx.utils.sheet_to_json(ws);

const newData = data.map(function(listar) {
    listar.name;
})
// pokemon_list = [
//     {name: ''},
//     {pokedex: ''},
//     {img: ''},
//     {generation: ''},
//     {evolution: ''},
//     {family_id: ''},
//     {type_1: ''},
//     {type_1: ''},
//     {weather_1: ''},
//     {weather_2: ''},
//     {atk: ''},
//     {def: ''},
//     {sta: ''},
//     {Legendary: ''}
// ];


// for(i = 0; i < 2; i++) {
//     pokemon_list.push(
//         { name: data[i].Name },
//         { pokedex: data[i]['Pokedex Number'] },
//         { img: data[i]['Img name'] },
//         { generation: data[i].Generation },
//         { evolution: data[i]['Evolution Stage'] },
//         { family_id: data[i].FamilyID },
//         { type_1: data[i]['Type 1'] },
//         { weather_1: data[i]['Weather 1'] },
//         { atk: data[i].ATK },
//         { def: data[i].DEF },
//         { sta: data[i].STA },
//         { Legendary: data[i].Legendary }
//     );
//     console.log('loop ' + [i])
  
// }

//
// console.log(`${data[0].Name} -- name`)
// console.log(`${data[0]['Pokedex Number']} - pokedex number`)
// console.log(`${data[0]['Img name']} - img name`)
// console.log(`${data[0].Generation} - generation`)
// console.log(`${data[0]['Evolution Stage']} - evolution stage`)
// console.log(`${data[0].FamilyID} - family id`)
// console.log(`${data[0]['Type 1']} - type 1`)
// console.log(`${data[0]['Type 2']} - type 2`)
// console.log(`${data[0]['Weather 1']} - weather 1`)
// console.log(`${data[0]['Weather 2']} - weather 2`)
// console.log(`${data[0].ATK} - atk`)
// console.log(`${data[0].DEF} - def`)
// console.log(`${data[0].STA} - sta`)
// console.log(`${data[0].Legendary} - legendary`)


pokemon_list = [];

// for(i = 0; i < 151; i++) {
//     pokemon_list.push(data[i]);
// }

//console.log(data);

for(i = 0; i < pokemon_list.length; i++) {
    //console.log(`${pokemon_list[i]['Pokedex Number']} - ${pokemon_list[i].Name}`)
}

//console.log(pokemon_list[1])
//console.log(pokemon_list.length)
module.exports = pokemon_list;
 