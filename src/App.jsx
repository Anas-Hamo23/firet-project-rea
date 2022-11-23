import {BrouserRouter,Routes,Route} from 'react-router-dom'


import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contsct from './pages/contact/Contact'
import Palns from './pages/palns/Palns'
import Notfound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'


 const App = () => {
   return (
     <BrouserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Contsct/>
        <Gallery/>
        <Palns/>
        <Trainers/>
        <Notfound/>
     </BrouserRouter>
   )
 }
 
 export default App
 