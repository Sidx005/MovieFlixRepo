import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './flix.css'
import Footerr from './Footerr';
function Home({setUsername}) {
const [inputData,setInputData]=useState('')
const  handleSubmit=()=>{
  if(inputData===''){
    alert('Enter Username')
  }else
 { setUsername(inputData)
  localStorage.setItem('username',inputData)}
}
  return (
    <div className="main">
    <div className='Home'>

     <div className="content">
     <nav>
      <h1>Moviesflix</h1>
      <button>Sign In</button>
      </nav>

     <h3>Want to bing watch and enjoy your vacations?</h3>
     <br />
     <p>Here's your destination for unlimited movies and series</p>
    
    
     <div className="buttons" >
      
      <input required type="text" onChange={(e)=>setInputData(e.target.value)} name='username'  placeholder='Username' />
       <button type='submit'><Link style={{textDecoration:'none',color:'#fff',fontWeight:'bolder'}} to={inputData?"Movies":'/'} onClick={handleSubmit} >Click Here</Link></button>
</div>

     </div>
  
    </div>

    <div className="section2">

      <h2>
        Grab Some popcorn and <br />have fun with your loved ones!!!
      </h2>

      <div className="avatar">
        <img height={'100%'} width={'100%'} src="https://img.freepik.com/free-photo/view-3d-young-child-watching-movie_23-2151069465.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1712102400&semt=ais" alt="" />
      </div>
    </div>
    <div className="section3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXolvtG5Uk4CrYiVv9EyEDyH9WPDuXLsR96NSEcrMMGA&s" alt="" />
      <span>
      <h2>Create Profile for your kids <br />
      </h2>    
        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>

      </span>
     
    </div>
    <Footerr/>
    </div>
  )
}

export default Home
