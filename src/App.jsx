import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Info from './Info'
import Trailer from './Trailer'
import Navabar from './Navabar'
import Contact from './Contact'
Trailer
function App() {
  const [username, setUsername] = useState('')

  return (
    <Router>
    <Routes>
    {/* <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',width:'100%'}}> */}
   
    
    <Route path='/' element={
    
      <Home setUsername={setUsername}/>
      }></Route> 
      <Route path='Movies' element={<><Movies username={username}/></>}></Route>  
      <Route path='/details/:id' element={<Info/>}></Route>  
      <Route path='/trailer/:id' element={<Trailer/>}></Route>  
      <Route path='/Contact' element={<Contact/>}></Route>  

    </Routes>
      
    </Router>
   
  )
}

export default App
