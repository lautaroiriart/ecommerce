import React from "react";
import './NavBar.css';
import logo from '../../vela-icon.svg';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'


export default function NavBar() {
    return(

        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} className="logo"/>
                    <h1>Velas</h1>
                </div>
                <ul className="navBar-items">
                    <Link to="/">
                    <li><Button color="inherit">Home</Button></li>
                    </Link>

                    <Link to="">
                    <li><Button color="inherit">Productos</Button></li>
                    </Link>

                    <Link to="/category/about">
                    <li><Button color="inherit">Quienes somos</Button></li>
                    </Link>

                    <Link to="/category/contact">
                    <li><Button color="inherit">Contacto</Button></li>
                    </Link>
                </ul>
                <CartWidget/>
            </nav>
        </AppBar>
    )
}