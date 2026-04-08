import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import flower from "./Images/flower.jpg"
import Moon from "./Images/Moon.jpg"
import "./Signup.scss"



function Signup() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const[fname , setFname] = useState('')
  const[lname , setLname] = useState('')
  const[uname ,  setUname] = useState('')
  const[pass , setPass] = useState('')


  const handleSignup = (e) =>{
    e.preventDefault()

      if(fname == '' || lname == '' || uname == '' || pass == ''){
        toast.error("All the fields are mandatory !!")
      }else{

        localStorage.setItem("user" , uname)
        localStorage.setItem("pass" , pass)
        toast.success("signup Success")

     setTimeout(() =>{
         window.location.href = "/loginpage"
     },5000)

       
      }
  }

  return (
    <div>
      <ToastContainer/>
      <h1>Signup Page</h1>

    <form onSubmit={handleSignup}>

        <input type='text' placeholder='Enter ur first name' value={fname} onChange={(e) => setFname(e.target.value)}/>
  <input type='text'  placeholder='Enter ur Last name' value={lname} onChange={(e) => setLname(e.target.value)}/> 
   <input type='text'  placeholder='Enter ur Last name' value={uname} onChange={(e) => setUname(e.target.value)}/> 
    <input type='text'  placeholder='Enter ur Last name' value={pass} onChange={(e) => setPass(e.target.value)}/> 

    <button type='submit'>Signup</button>
      </form>     


<Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

    <div className='wrapss'>
        <img src={flower}/>
        <img src={Moon}/>
         <img src={flower}/>
        <img src={Moon}/>
         <img src={flower}/>
        <img src={Moon}/>
         <img src={flower}/>
        <img src={Moon}/>
        
    </div>
    </div>

  )
}

export default Signup




// button ----- button ------  onclick 

//        -----  submit ----- form 