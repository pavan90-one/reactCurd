import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
