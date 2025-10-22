import { useState } from 'react'
import NavBar from './components/Navbar'
import Home  from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contacts from './Pages/Contacts'
import Projects from './Pages/Projects'

function App() {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path='/Projects' element={<Projects/>}/>

    </Routes>
    </>
  )
}
export default App