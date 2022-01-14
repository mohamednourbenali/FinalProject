import React,{Fragment,useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams} from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'
import Home from './Home';
import Login from './Login';
import Register from './Register'
import Course from "./Course"
import { useSelector, useDispatch } from "react-redux";
import {logout,register,login,getAuthUser} from "../redux/action/action"
import Admin from './Admin';
import User from './User';
import { Link } from "react-router-dom";

const Navigation =()=>{
    
        
    
        const dispatch = useDispatch();
        const isAuth = useSelector((state) => state.authReducer.isAuth);
        const user = useSelector((state)=> state.authReducer.member);
        const role = user && user.role
        console.log(role)
        const [member,setMember]=useState({
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            role:"not authorized"
        });

        return(
            <Navbar className="d-flex justify-content-between" color="dark" variant="dark" fixed="top">
                <NavbarBrand tag={()=>(
                    <Link to="/">Bö-SPORT</Link>
                )}/>
                <Nav>
                    {isAuth && role === "admin"?(
                        <Fragment>
                            <NavItem className='p-2'>
                                <Button onClick={()=>dispatch(logout())}>logout</Button>
                            </NavItem>
                            <NavItem className='p-2'>
                                <Button>
                                    <Link to="/admin">admin</Link>
                                </Button>
                            </NavItem>
                        </Fragment>
                    ): isAuth && role === "user"?(
                        <Fragment>
                            <NavItem className='p-2'>
                                <Button>
                                    <Link to="/user">user</Link>
                                </Button>
                            </NavItem>
                            <NavItem className='p-2'>
                                <Button onClick={()=>dispatch(logout())}>logout</Button>
                            </NavItem>
                        </Fragment>
                    ) : 
                    <Fragment>
                    <NavItem className='p-2'>
                    <Button variant="primary">
                                    <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                                </Button>
                                </NavItem>
                        </Fragment>
                                }
                </Nav>
            </Navbar>
        )  
    }

export default Navigation;