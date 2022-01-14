import React,{useState} from 'react'
import { Button,Modal,Form,Col,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
function Register({register}) {
    const open = {register}
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email: "",
        password: "",
    });
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button onClick={handleShow}>Register</Button>
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
                        <Form.Control type="text" name="firstname" placeholder="Enter first name..." />
                    </Col>
                    <Col md>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="enter last name..."/>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Register;