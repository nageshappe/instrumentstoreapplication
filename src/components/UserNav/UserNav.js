import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import {UserNavbarItems} from "./UserNavbarItems";
import '../Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import { GuestNavbarItems } from '../GuestNavbarItems';

class UserNavbar extends Component
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
            <nav data-testid="userNavbar" className="NavbarItems">
                <h2 className="navbar-logo">
                    Instrument Store
                    <i className="fab fa-react">

                    </i>
                </h2>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {UserNavbarItems.map((item,index)=>{
                        return (
                            <li key={index}>
                                <a data-testid={item.id} className={item.cName} href={item.url}>
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
export default UserNavbar;