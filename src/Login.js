import React, { useState } from 'react'
import "./Login.scss"
  import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const[oldUser , setOldUser] = useState(localStorage.getItem("user"))
  const[oldpass , setOldpass] = useState(localStorage.getItem("pass"))

   const[uname , setUname] = useState('')
    const[pass , setPass] = useState('')



    const handleLogin = (e) =>{
       e.preventDefault()

       if(uname == '' || pass == ''){
          toast.error("All the fields are mandatory")
       }else if(oldUser == uname && oldpass == pass){
          toast.success("Login Success")
       }else{
        toast.error("Please enter valid username and password")
       }
    }

  
  return (
    <div>
        <ToastContainer/>
        <h1 className='hlo'>This is Login page</h1>

        <form onSubmit={handleLogin}>

      
                  <input type='text' placeholder='uname'value={uname} onChange={(e) => setUname(e.target.value)} />
          <input type='password' placeholder='password' value={pass} onChange={(e) => setPass(e.target.value)} />
      <button type='submit'>Login</button>
     </form>
    </div>
  )
}
  
export default Login
