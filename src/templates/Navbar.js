import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container navbar-container'>
                <Link to='/' className='navbar-anchor brand'>
                    toca do bilbo 
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
