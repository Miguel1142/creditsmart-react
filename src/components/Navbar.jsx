import React from 'react'
import { link, useLocation, uselocation } from 'react-router-dom';

export const Navbar = () => {

    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }
    return (
        <nav className='navbar'>
            <div className='container'>

                <link to="/" className={"nav-brand"}>
                    CreditSmartdata
                </link>

                <ul className='nav-menu'>
                    <li>
                        <link to="/" className={isActive('/')}>
                            Inicio
                        </link>
                    </li>
                    <li>
                        <link to="/simulador" className={isActive('/simulador')}>
                            Simulador
                        </link>
                    </li>
                    <li>
                        <link to="/solicitar" className={isActive('/solicitar')}>
                            Solicitar Créditos
                        </link>
                    </li>

                </ul>

            </div>

        </nav>
    )
}





