import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Services from './components/Services/Services'
import ServiceTypes from './components/ServiceTypes/ServiceTypes'
import Guarante from './components/Guarantee/Guarante'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <About/>
    <Advantages/>
    <Services/>
    <ServiceTypes/>
    <Guarante/>
    <FAQ/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
