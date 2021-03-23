import React, {Component}from 'react';
import logo from "../Icons/logo.svg";


class Navbar extends Component {
    render() { 
        return ( 
            <div className="navbar">
                <div className="navimage">
                    <img src={logo} className="mainlogo" alt="logo" />	
                </div>
                    <ul className="nav-ul">
                        <li>Sign In</li>
                        <li>Feautures</li>
                        <li>Team</li>
                    </ul>
            </div>
         );
    }
}
 
export default Navbar;