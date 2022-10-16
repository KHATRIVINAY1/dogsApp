import logo from '../logo.svg'
import {Link} from "react-router-dom"
const Navbar= ()=>{
    return <>
    <nav className="navbar">
    <div className="container d-flex flex-wrap" style={{'alignItems':'center', 'justifyContent':'spaceBetween'}}>
        <Link to='/'>
            <img src={logo} alt ="Logo" style={{'width':'50px', 'height':'50px', 'borderRadius':'50%', 'backgroundColor':'white'}}/>
        </Link>
        <ul className='nav-links'>
            <li><Link className='nav-link' to ="/">Home</Link></li>
            <li><Link className='nav-link' to ="/about">About</Link></li>
        </ul>
    </div>
    </nav>

    </>
}

export default Navbar;