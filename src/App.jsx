import { useState } from 'react'

import Nav from './components/Navbar.jsx'
import Beranda from './components/Beranda.jsx'
import Link from './components/LinkSosial.jsx'
import Footer from './components/Footer.jsx'
import FloatingMusicPlayer from './components/FloatingMusicPlayer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <Beranda/>
     <Link/>
     <Footer/>
  
    
    </>
  )
}

export default App
