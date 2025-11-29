import React from 'react'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }
    return (
        <nav className='navbar'>
            <div className='container'>

                <link>
                </link>

            </div>

        </nav>
    )
}


