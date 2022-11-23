
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
import './header.css'

const MainHeader = () => {
  return (
     <header className='main__header'>
        <div className='container main__header-container'>
            <div className='main__header-left'>
              <h4>#100DaysOfWorkOut</h4>
              <h1>Lorem ipsum dolor sit amet consectetur.</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque exercitationem incidunt consectetur nesciunt veniam.</p>
              <Link to="/palns" className='btn lg'>Get Started</Link>
            </div>
            <div className='main__header-right'>
              <div className='main__header-circle'></div>
              <div className='main__header-image'>
                  <img src={Image} alt="Mian_header_image"/>
              </div>
            </div>
        </div>
     </header>
  )
}

export default MainHeader