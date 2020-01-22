import React, { useState, useEffect} from 'react';

import Header from './Header';
import PokemonSearch from './PokemonSearch';

import api from '../services/api';

//import icon_pokeball from '../assets/icon_pokeball.png';  

function Pokedex() {
    const [list, setList] = useState('');
    const [search, setSeach] = useState('zerado');
 
    useEffect(() => {
		async function loadLista() {
      try {		
        const response = await api.get('/mostrar')
 
        setList(response.data)
    

 			} catch (err) {
				console.log(err)
			}
		}
		loadLista()
  },[]);
  
 


    // const [toggle, setToggle] = useState([
    //     {isToggleOn: 0 }
    // ])
 
  
    
    // const handleToggle = e => {
    //     e.preventDefault();
    //     console.log('clicou')
    //     console.log(toggle)
    //     setToggle(!toggle)
       
    // }

    // const handleMaior = e => {
      
    // }
    // const handleMenor = e => {
      
    // }
    // const handleAz = e => {
      
    // }
    // const handleZa = e => {
      
    // }


    // function UserGreeting(props) {
    //     return  <ul>
    //                 <li>Organizar resultados por...</li>
    //                 <li>Maior número primeiro</li>
    //                 <li>Menor número primeiro</li>
    //                 <li>A-Z</li>
    //                 <li>Z-A</li>
    //             </ul>;
    //   }
      
   


    // function Greeting(props) {
    //      if (!toggle) {
    //         return <UserGreeting />;
    //     }
    //     return ''
    // }

    const SearchPokemon = (name) => {
        //pega o nome passado pelo PokemonSearch e enviar para 
        //useState search
         setSeach(name);
    }
    //filtra o nome do search pelo array da api pokemons
    let filtered = list && list.filter((busca, n) => {
        return busca.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })

 

      console.log(filtered)
     
 
 
 
 

    function FamilyId(props) {
      const familyId = []

      let getFamilyId = props.familyId;
      let get;
      
      for(get of list) {
          if(get.family_id === getFamilyId) {
            familyId.push(get)
          }
      }
    
      if(familyId) {
        return familyId.map((familia) => { 
        return <div className="arrow-evolution">
                  <img alt="familia pokemon" src={familia.img}/> 
                  <h5>{familia.name} Nº<span>{familia.pokedex}</span></h5>
                  <h6 className={"type color-type-" + familia.type_1}>{familia.type_1}</h6>
                </div>
              })
        
      }

    }
    // <h3 className="">{lista.name}  Nº{lista.pokedex}</h3>

    
     
   return (
        <div>
            <Header/>
            <PokemonSearch SearchPokemon={SearchPokemon}/>

            <div className="my-container-pokedex">
            <div className=" "> 

            {filtered && filtered.map((lista, n) => (
            <div className="container-pokedex col s12   push" key={n}>
                <h3 className="">{lista.name}  Nº{lista.pokedex}</h3>

                <div className="container-pokedex-desc">

                <div className="pokedex-left-grid">
                   <img alt="" className="responsive-img" src={lista.img}/>
                </div>

                <div className="pokedex-right-grid">
                    <h6><span>Geração</span> - {lista.generation}</h6>
                    <h6><span>Evolução</span> - {lista.evolution}</h6>
                    <h4 className={"type color-type-" + lista.type_1}>{lista.type_1}</h4>

                    <div>
                      <h6><span>ATK</span> - {lista.atk}</h6>
                      <h6><span>DEF</span> - {lista.def}</h6>
                      <h6><span>STA</span> - {lista.sta}</h6>
                      <h6 className={"legendary-" + lista.legendary}>{lista.legendary > 0 ? 'Lendario' : ''}</h6> 
    
                    </div>        
                </div>

                </div>
             
                <div className="pokedex-down"  >
   
                  <div className="pokedex-evolution ">
                      <FamilyId familyId={lista.family_id} />
                  </div>

                </div>

                

            </div>
          //  fim container-pokedex
                
            ))} 
 
            </div>
            </div>
        </div>
  );
}

export default Pokedex;
