import React, { useState, useEffect } from 'react';
import api from '../services/api';

const NewSongForm = ({SearchPokemon}) => {
    const [list, setList] = useState('');
    const [search, setSeach] = useState('');

    useEffect(() => {
		async function loadLista() {
      try {		
        const response = await api.get('/mostrar')
        //const response_images = await api.get('/imagens');
        //console.log(response.data[0])
 
        setList(response.data)
     
   
 			} catch (err) {
				console.log(err)
			}
		}
		loadLista()
  },[]);
  
    const handleSubmit = (e, array, title) => {
        e.preventDefault();

        let lista;

        for(lista of list){
          if(lista.name.toLowerCase().indexOf(search.toLowerCase()) < 0){
            //console.log('**************************** ' +lista.name)
       
          } else {
            //console.log('PASSOU ' + lista.name)
           // console.log('PASSOU ' + lista)
            SearchPokemon(lista.name)
          }
        }
        
    }
    return (
        <div className="container">
             
            <form onSubmit={handleSubmit}>
            <input className="white-text" type="text" value={search} placeholder="digite o nome..."
                required onChange={(event) => setSeach(event.currentTarget.value)}/>
            </form>
 
        </div>
    )
}

export default NewSongForm;