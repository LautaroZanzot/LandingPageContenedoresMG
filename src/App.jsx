import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Icons from '../components/Icons'
import Footer from '../components/Footer/'
import Form from '../components/Form'
import WhatsAppIcon from '../components/WhatsAppIcon'

function App() {

  return (
    <>
    <div>
      <WhatsAppIcon/>
      <Navbar/>
      <Home/>
      <Icons/>
      <Form/>
      <Footer/>
    </div>
    </>
  )
}

export default App
