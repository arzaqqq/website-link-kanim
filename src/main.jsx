import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Nav from './components/Navbar.jsx'
import Beranda from './components/Beranda.jsx'
import Link from './components/Link.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Nav/>
     <Beranda/>
     <Link/>
     <Footer/>
    <App />
  </StrictMode>,
)
