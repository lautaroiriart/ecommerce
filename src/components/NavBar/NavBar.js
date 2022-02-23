import React from "react";
import './NavBar.css';
import logo from '../../vela-icon.svg';
import AppBar from '@mui/material/AppBar';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


export default function NavBar() {
    return(

        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} className="logo" alt="logo"/>
                    <h1>Velas</h1>
                </div>
                <ul className="navBar-items">
                    <Link to="/">
                    <li>Home</li>
                    </Link>

                    <Link to="">
                    <li>Productos</li>
                    </Link>

                    <Link to="/category/about">
                    <li>Quienes somos</li>
                    </Link>

                    <Link to="/category/contact">
                    <li>Contacto</li>
                    </Link>
                </ul>
                <CartWidget/>
            </nav>
        </AppBar>
    )
}