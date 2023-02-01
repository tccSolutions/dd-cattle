import React from "react";
import './navbar.styles.css';
import brandLogo from '../../images/brand.png'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavItem } from "react-bootstrap";
import { useAuth } from "../../api/AuthContext";


function NavbarHeader() {
const auth = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-dark nav" >
            <div className="container-fluid  align-items-end">
                <Navbar.Brand className=" navbar-brand p-3 align-items-end">
                    <a href='/home'>
                        <img src={brandLogo} className="brand" alt="uh-oh" width={'150px'} />
                    </a>
                </Navbar.Brand>
               <Navbar.Toggle className="mb-3" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="" id="responsive-navbar-nav">
                    <Nav className="w-100">                   
                        <NavItem className="fs-5">                            
                            <Link className="nav-link " aria-current="page" to="/home">Home</Link>                      
                        </NavItem>
                        <NavItem className="fs-5">
                            <Link className="nav-link" to="/about">About</Link>
                        </NavItem>
                        <NavItem className="fs-5">
                            <Link className="nav-link " to="/our-herd">Our Barn</Link>
                        </NavItem>
                        <NavItem className="fs-5">
                            <Link className="nav-link" to="/for-sale">Find Your Partner</Link>
                        </NavItem>

                        <NavItem className="fs-5">
                            <Link className="nav-link" to="/records">Records</Link>
                        </NavItem>  
                        <NavItem className="fs-5 ms-auto">
                            {!auth.isAuthenticated && <Link className="nav-link" to="/login">Sign In</Link>}
                            {auth.isAuthenticated && <button className="btn nav-link" onClick={()=>auth.logout()}>Sign Out</button>}
                        </NavItem>                    
                    </Nav>
                </Navbar.Collapse>
                
            </div>
        </Navbar>
    )
}

export default NavbarHeader;