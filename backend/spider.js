const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');
const readline = require('readline');
var wtj = require('website-to-json')
var trim = require('trim')


let url1 = 'http://www.nintendolife.com/news/2018/03/guide_pokemon_go_pokedex_1_-_50';
let url2 = 'http://www.nintendolife.com/news/2018/03/guide_pokemon_go_pokedex_51_-_100';
let url3 = 'http://www.nintendolife.com/news/2018/03/guide_pokemon_go_pokedex_101_-_150';
let url4 = 'http://www.nintendolife.com/news/2018/03/guide_pokemon_go_pokedex_151_-_200';



// wtj.extractData(url3, {
//   fields: ['data'],
//   parse: function($) {
//     return {
//         image: $('#article > div > section > table > tbody > tr:nth-child(1) > td:nth-child(3) > figure').map(function(val) {
//           return $(this).attr('href')
//         }).get()
//         }
//     }
// })
// .then(function(res) {
//     let response = JSON.stringify(res, null, 2)
//     fs.writeFile('pokemon_image4.json', response, 'utf8');
// })


