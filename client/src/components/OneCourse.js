import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Modal,Form,Table } from 'react-bootstrap';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const OneCourse = ({list}) => {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.authReducer.member);
    const role = user && user.role;
    console.log("onecourse :",user && user.role)
    const [title,setTitle] = useState(list.title);
    const [date,setDate] = useState(list.date);
    const [group,setGroup] = useState(list.group);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (course) =>{
        setShow(true)
        setTitle(course.title);
        setDate(course.date);
        setGroup(course.group);
    };
    const updateCourse = async (idcourse,updatedCourse)=>{
        axios.put(`/app/updateCourse/${idcourse}`,updatedCourse)
        .then((response)=>{
            const data = response.data;
            console.log("update : ",data);
        })
        .catch((error)=>{
            console.log('error : ',error);
        })
    }
    const reserveCourse = async(titleCourse,memberfirstname)=>{
        axios.put(`/app/reserve/${title}`,memberfirstname)
        .then((response)=>{
            const data = response.data;
            console.log("reserving : ",data);
        })
        .catch((err)=>{
            console.log("error : ",err);
        })
    }
    const deleteCourse = async (_id) =>{
        axios.delete(`/app/deleteCourse/${_id}`)
        .then( console.log('deleted successfully ! '))
        .catch(err=>console.log(err))
    }
    return (    
        <div style={{display:"flex"}}>
            <Table striped bordered hover variant="dark">          
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>max group</th>
                        <th>date</th>
                        {role==="admin"?<><th>Update</th>
                        <th>Delete</th></>:null}
                        <th>reserver</th>
                    </tr>
                </thead>
                {list.map((el)=><>
                <tbody>
                    <tr>
                        <td>{el.title}</td>
                        <td>{el.group} </td>
                        <td>{el.date}</td>
                        {role==="admin"?<>
                        <td><Button onClick={()=>{handleShow(el)}}> update </Button></td>
                        <td><Button onClick={()=>deleteCourse(el._id)}> delete </Button></td></>:null}
                        <td><Button onClick={()=>reserveCourse(el.title,user.firstname)}>reserver</Button></td>
                    </tr>
                </tbody>
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
                        <Form.Control type="text" placeholder="Enter course title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                        <Form.Label>max number of members</Form.Label>
                        <Form.Control type="text" placeholder="Enter a number" onChange={(e)=>setGroup(e.target.value)} value={group}/>
                        <Form.Label>date</Form.Label>
                        <Form.Control type="text" placeholder='Enter the date' onChange={(e)=>setDate(e.target.value)} value={date}/>
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={()=>updateCourse(el._id,{title,date,group})}>submit</Button>
                </Modal.Footer>
                </Modal>
                </>)}
            </Table>
        </div>
    )
}

export default OneCourse
