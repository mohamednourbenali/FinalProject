import React,{useState} from 'react'
import axios from 'axios'
import { Button,Modal,Form,Col,Row,Table } from 'react-bootstrap'
import { register } from '../redux/action/action'
 
const OneMember = ({list}) => {
    const deleteMember = (_id) =>{
        axios.delete(`/app/delete/${_id}`)
        .then( console.log('deleted successfully ! '))
        .catch(err=>console.log(err))
    }
    const updateMember = (idmember,updatedMember)=>{
        console.log(idmember);
        axios.put(`app/update/${idmember}`,updatedMember)
        .then((response)=>{
            const data = response.data;
            console.log("update : ",data);
        })
        .catch((error)=>{
            console.log('error : ',error);
        })
    }
    const handleSubmit=()=>{
        console.log(firstname,lastname,"  ",email);
    }
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');
    const [id,setId] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (member) =>{
        setShow(true)
        setFirstname(member.firstname);
        setLastname(member.lastname);
        setEmail(member.email);
        setId(member._id);
    };
    return (
        <div>
            <Table striped bordered hover variant="dark">          
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {list.map((el)=><>
                <tbody>
                    <tr>
                        <td >_</td>
                        <td>{el.firstname}</td>
                        <td>{el.lastname} </td>
                        <td>{el.email}</td>
                        <td>{el.role}</td>
                        <td><Button onClick={()=>{handleShow(el)}}> update </Button></td>
                        <td><Button onClick={()=>deleteMember(el._id)}> delete </Button></td>
                    </tr>
                </tbody>
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
                                <Form.Control value={firstname} type="text" placeholder="Enter first name..." onChange={(e)=>setFirstname(e.target.value)}/>
                            </Col>
                            <Col md>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={lastname} type="text" placeholder="enter last name..." onChange={(e)=>setLastname(e.target.value)}/>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button onClick={()=>updateMember(id,{firstname,lastname,email})}> submit </Button>
                    </Modal.Footer>
                </Modal>
                </>)}
            </Table>
        </div>
    )
}

export default OneMember
