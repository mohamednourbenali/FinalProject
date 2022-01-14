import React,{useState} from 'react'
import { Button,Modal,Form,Col,Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'sassy-datepicker';

const AddCourse = () => {
    const [show, setShow] = useState(false);
    const [hours,setHours] = useState(16);
    const [minutes,setMinutes]= useState(0);
    const [date,setDate]=useState('');
    const [fulldate,setFulldate]=useState('');
    const [title,setTitle] = useState('');
    const [group,setGroup] = useState(0);
        
    const handleDate = async()=>{
        setFulldate(""+date+" at "+hours+":"+minutes);
        console.log(fulldate);
    }
    const onChange = async(newDate) => {
        setDate(newDate.toString().substring(0,15));
      };
    const handleAdd =(e)=>{
        e.preventDefault();
        const payload ={
            title : title,
            date : fulldate,
            group : group
        };
        console.log("payload : ",payload);
        axios({
            url:"http://localhost:3000/app/savecourse",
            method:'POST',
            data : payload
        }).then(()=>{console.log("data has been succefully sent to the server")})
          .catch((error)=>{console.log("Internal server error")});
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add course
            </Button>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Course name</Form.Label>
                    <Form.Control type="text" placeholder="Enter course title" onChange={(e)=>setTitle(e.target.value)}/>
                    <Form.Label>max number of members</Form.Label>
                    <Form.Control type="text" placeholder="Enter a number" onChange={(e)=>setGroup(e.target.value)}/>
                    <Form.Label>date</Form.Label>
                        <Row className="g-2">
                            <Col md>
                                <Form.Select onChange={async(e)=>setHours(e.target.value)}>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </Form.Select>
                                <Form.Label>Hours</Form.Label>
                            </Col>
                            <Col md>
                                <Form.Select onChange={async(e)=>setMinutes(e.target.value)}>
                                    <option value="00">00</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                </Form.Select>
                                <Form.Label>Minutes</Form.Label>
                            </Col>
                        </Row>
                        <DatePicker onChange={onChange} />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleAdd}>submit</Button>
                <Button onClick={handleDate}>date</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
    }

export default AddCourse
