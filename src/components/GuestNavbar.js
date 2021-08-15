import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';

import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { GuestNavbarItems } from './GuestNavbarItems';

class Navbar extends Component
{
    state = { clicked : false}

    handleClick = () =>
    {
        this.setState({
            clicked:!this.state.clicked,
            navitems :''
        })

    }

    

    render()
    {
        return(
            <nav className="NavbarItems">
                <h2 className="navbar-logo">
                    Instrument Store
                    <i className="fab fa-react">

                    </i>
                </h2>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {GuestNavbarItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
             
            </nav>
        )
    }
}
export default Navbar;