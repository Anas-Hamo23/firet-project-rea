import {Link,NavLink} from 'react-router-dom'

import './navbar.css'
import Logo from '../images'
const Navbar = () => {
  return (
     <nav>
        <div className='.container nav__container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
        </div>
     </nav>
  )
}

export default Navbar