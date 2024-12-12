import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='shadow-md'>
            <div className='flex justify-between items-center max-w-[1400px] w-full mx-auto select-none'>
                <NavLink to='/'><img src={Logo} className='w-[100px]' /></NavLink>
                <ul className='max-w-[200px] w-full flex justify-between'>
                    <NavLink className='hover:underline' to='/'>Home</NavLink>
                    <NavLink className='hover:underline' to='/about'>About</NavLink>
                    <NavLink className='hover:underline' to='/blog'>Blog</NavLink>
                </ul>
            </div>
        </header>
    )
}

export default Header
