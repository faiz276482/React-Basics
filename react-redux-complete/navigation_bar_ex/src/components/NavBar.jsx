import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='nav-wrapper blue darken-3' >
            <div className='container'>
                <a href="/#" className='brand-logo'>Title</a>
                <ul className='right'>
                    <li><Link to='/'>Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}
