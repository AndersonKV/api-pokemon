import React, {useState, useEffect} from 'react';
import api from '../services/api';

import Header from './Header';
import Pokemon from './Pokemon';
import Pagination from './Pagination';

function PokemonList() {
  //const [list, setList] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
		async function loadLista() {
      try {		
        const response = await api.get('/mostrar')
        //setList(response.data)
        let i;
        let box = []

        for(i = 0; i < 20; i++) {
          box.push(response.data[i])
        }
        //setList(box)
        setPosts(response.data)
        setLoading(false);

 			} catch (err) {
				console.log(err)
			}
		}
		loadLista()
  },[]);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // // function pego(e) {
  // //   e.preventDefault();
  // //   console.log('sim')
  // // }
  function paginate(pageNumber) {

      try {
        let removeActive = document.querySelectorAll('.ul-active');
        let remove;

        for(remove of removeActive) {
          remove.classList.remove('ul-active')
        }

      } catch(err) {
        //err
      }
    

       //pego 2 ul
      let ul_top = document.querySelectorAll('ul')[0]
      let ul_down = document.querySelectorAll('ul')[1]

      let li_top = ul_down.querySelectorAll('li');
      let li_down = ul_top.querySelectorAll('li');

      setCurrentPage(pageNumber)
      
      li_top[pageNumber].classList.add("ul-active");
      li_down[pageNumber].classList.add("ul-active");

      
   }
  
 
  return (
    <>
    <Header/>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts} 
                paginate={paginate}/>

    <div className="my-container-list">
      <Pokemon posts={currentPosts} loading={loading}/>
    </div>

    <Pagination postsPerPage={postsPerPage} totalPosts={posts} 
                paginate={paginate}/>

    </>
  );
}

export default PokemonList;



 
// {list && list.map((lista, n) => (
//   <div className="col z-depth-1 grey lighten-4 move" key={n}>
//     <div class=" ">
//       <div class="card-image">
//         <img alt="" className=" " src={lista.img}/>
//       </div>
//     </div>

//     <div className="card-content ">
//         <h6>Nº {lista.pokedex}</h6>
//         <h3>{lista.name}</h3>
//         <h6 className={"type color-type-" + lista.type_1}>{lista.type_1}</h6>
//     </div>
//   </div>