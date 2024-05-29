import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFilm, faHome, faMale, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
const Navabar = () => {


    const[menuopen,setmenuOpen]=useState(false);
    const [username, setUsername] = useState('');

    const open=()=>{
     setmenuOpen(!menuopen) 
    }
    const letters=()=>{
      if(username.length>1){
        return username[0]+username[username.length-1]
      }else{
        return username
      }
    }
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
          setUsername(storedUsername);
      }
  }, []);
  return (
    <div className="navbar">
        <Link className="title" to="/">
            <h1>Moviesflix</h1>
        </Link>
        <ul className={menuopen?"open":""}>
            <li><Link to={'/'}><FontAwesomeIcon icon={faHome}/></Link></li>
            <li><Link to={'/Movies'}><FontAwesomeIcon icon={faFilm}/></Link></li>
            <li><Link to={'/Contact'}><FontAwesomeIcon icon={faUser}/></Link></li>
            <li>        <p id='profile' style={{color:'white', textTransform:'uppercase'}}>{letters()}</p>
</li>
        </ul>
    
        <FontAwesomeIcon onClick={open} icon={faBars} style={{color:'#fff'}} className='menu'></FontAwesomeIcon>

   
   
     </div>
  )
}

export default Navabar