import React from 'react'
import './navBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

    return (
        <div className='NavBar'> 
            <h1>
                NavBar
            </h1>
            <a href={""}>home</a>
            <a href="">productos</a>
            <a href="">contacto</a>
            <CartWidget/>
        </div>
    )
}

export default NavBar
