import React,{useState} from 'react'
import {connect} from 'react-redux';
import { addmember } from '../redux/action/action';
import { Button,Modal,Form,Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login,register,getUser } from "../redux/action/action";

const Login = (props) => {
    
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authReducer.payload);  
    // let history = useHistory();
    const mystyle = {
        color: "blue",
        backgroundColor: "#f2f2f2",
        padding: "50px",
        paddingLeft:"100px",
        paddingRight:"100px",
        fontFamily: "Arial",
        marginTop:"0px"
    };
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email: "",
        password: "",
      });
    const searchMember = async(email)=>{
        axios.get(`/getuser/${email}`)
            .then((response)=>{
               const data = response.data;
               console.log("data : ",data);
            })
            .catch(err=>console.log(err))
    }
    const handleSubmit =(e)=>setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleConfirm = () => {
        dispatch(login(formData));
        // history.push("/navigation");
    }
    const handleAdd =(e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
        dispatch(register(formData));
        console.log('form data : ',formData)
        setShow(false);
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div style={{marginTop:"80px"}}>
            <h1 style={{color:"red",marginTop:"10px"}}> Bô-SPORT </h1>   
            <Form style={mystyle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleSubmit} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleSubmit} />
                </Form.Group>
                <Button variant="primary" onClick={handleConfirm}>
                    Submit
                </Button><br/>
                <Button variant="primary" onClick={handleShow} style={{margin:"20px"}}>
                    create new account
                </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Row className="g-2">
                            <Col md>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstname" type="text" placeholder="Enter first name..." onChange={handleSubmit}/>
                            </Col>
                            <Col md>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastname" type="text" placeholder="enter last name..." onChange={handleSubmit}/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleSubmit}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={handleSubmit}/>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button onClick={handleAdd}> submit </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </div>
    )
}

export default(Login)
