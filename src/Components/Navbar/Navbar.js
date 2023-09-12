import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({homeView}) => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbarLink'>
        <div className='logo-container'>
          <div className='poster'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>News Now</h1>
        </div>
      </Link>
    </div>
  )
}

export default Navbar