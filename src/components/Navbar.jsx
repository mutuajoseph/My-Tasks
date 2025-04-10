import React from 'react'
import { Logo } from './Logo'

export const Navbar = () => {
    return (
        <div className='navbar--style'>
            {/* logo */}
            <Logo />
            {/* navigation links here  */}
            <div className='navbar--links'>
                <a href="http://">history</a>
                <a href="http://">user</a>
            </div>
        </div>
    )
}