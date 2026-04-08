import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/loginpage' element={<Login/>}/>
        <Route path='/' element = {<Signup/>}/>
      </Routes>
      </Router>
     
        
    </div>
  )
}

export default App
