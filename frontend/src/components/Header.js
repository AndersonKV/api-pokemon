import React from 'react';
import { useHistory } from "react-router-dom";
import { withRouter} from "react-router-dom";
 
//import icon_pokeball from '../assets/icon_pokeball.png';  

function Header() {
    const history = useHistory();

    // const [toggle, setToggle] = useState([
    //     {isToggleOn: 'OFF' }
    // ])
 
    const handleHome = e => {
        history.push('/')
      // this.props.history.push("/some/Path");

   }

   const handlePokedex = e => {
    history.push('/Pokedex')
  // this.props.history.push("/some/Path");

}
    
    // const handleToggle = e => {
    //     console.log('clicou')
    //     console.log(toggle)
    //     setToggle(!toggle)
       
    // }

    // function UserGreeting(props) {
    //     return  <ul>
    //                 <li>Organizar resultados por...</li>
    //                 <li>Maior número primeiro</li>
    //                 <li>Menor número primeiro</li>
    //                 <li>>A-Z</li>
    //                 <li>Z-A</li>
    //             </ul>;
    //   }
      
   


    // function Greeting(props) {
    //      if (!toggle) {
    //         return <UserGreeting />;
    //     }
    //     return ''
    // }

  
    let getUrl = window.location.href;
    var url = getUrl.replace("http://localhost:3000/", "");

 
  
      
  return (
    <>
 
        {/* <div className="content-toggle"> 
            <div className="content-img-span">
                <img alt="icon-ball" src={icon_pokeball}/>
                <span onClick={handleToggle}>Organizar resultados por...</span>
            </div>
             <Greeting isLoggedIn={false} />
        </div> */}
 
    <nav className="deep-purple darken-3">
    <div className="nav-wrapper ">
    {url ? <button className="btn light-blue accent-4" type="button" onClick={handleHome}>Home</button> : <button className="btn pink darken-1" type="button" onClick={handlePokedex}>Pokédex</button>}
    
    </div>
  </nav>

    </>

  );
}

export default withRouter(Header);
