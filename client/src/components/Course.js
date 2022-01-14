import React,{useState} from 'react'
import { Button,Modal,Form,Col,Row } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import OneCourse from './OneCourse';
import AddCourse from './AddCourse';
import Carousel from 'react-bootstrap/Carousel'
import { useSelector, useDispatch } from "react-redux";

const Course = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const user = useSelector((state)=> state.authReducer.member);
    const role = user && user.role
    const [title,setTitle] = useState('');
    const [date,setDate] = useState("");
    const [group,setGroup] = useState("");
    const [search,setSearch] = useState("");
    const [courses,setCourses] = useState([]);
    const getCours =async()=>{
        axios.get('/app/courses')
            .then((response)=>{
                const data = response.data;
                console.log("data : ",data);
                setCourses(data);
                console.log('courses : ',courses)})
            .catch(()=>{
                alert('error retrieving data !')
            });
    }
    const searchCourse = async(title)=>{
        axios.get(`/app/searchCourse/${title}`)
            .then((response)=>{
                const data = response.data;
                setCourses(data);
                console.log(courses)
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div style={{marginTop : "100px"}}>
            <div style={{display:"flex",marginBottom:"50px"}}>
            <input type="text"  placeholder="enter course name..." onChange={(e)=>setSearch(e.target.value)}/>
            <Button onClick={()=>{searchCourse(search)}}>search</Button>
            <Button onClick={getCours}> view all courses</Button>
            {role==="admin"?<><AddCourse/></>:null}
            </div>
            <OneCourse list={courses} />
            {role==="user"?<div  style={{marginLeft:"20%"}}><Carousel>
            <Carousel.Item>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/w9w50DqXU5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Carousel.Caption>
                    <h2>Bö-SPORT</h2>
                    <h4>FITNESS</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="727" height="409" src="https://www.youtube.com/embed/RseHFTVAy-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <Carousel.Caption>
                    <h2>BÖ-SPORT</h2>
                    <h4>BODY PUMP</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="727" height="409" src="https://www.youtube.com/embed/SRYc-vMuzb4" title="YouTube video player" frameborder="0" allowautoplay allowfullscreen></iframe>

                    <Carousel.Caption>
                    <h2>BÖ-SPORT</h2>
                    <h4>BODY ATTACK</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></div>:null}
        </div>
    )
        }

export default Course
