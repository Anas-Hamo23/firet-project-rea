import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Palns from './pages/palns/Palns'
import Notfound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
   return (
     <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='palns' element={<Palns/>}/>
          <Route path='trainers' element={<Trainers/>}/>
          <Route path='*' element={<Notfound/>}/> 
         </Routes>
         <Footer/>
     </BrowserRouter>
   )
 }
 export default App
 