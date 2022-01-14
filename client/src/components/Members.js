import axios from 'axios'
import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import {connect} from "react-redux"
import OneMember from './OneMember';
import Table from 'react-bootstrap/Table'

const Members = () => {
    const [members,setMembers]=useState([]);
    const [search,setSearch] = useState("");
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const getMember =()=>{
        axios.get('/app/names')
            .then((response)=>{
                const data = response.data;
                setMembers(data);
                console.log('data has been received!')})
            .catch(()=>{
                alert('error retrieving data !')
            });
    }
    const searchMember = async(firstname)=>{
        axios.get(`/app/search/${firstname}`)
            .then((response)=>{
                const data = response.data;
                setMembers(data)
                console.log("data : ",data);
                console.log("members : ", members);
            })
            .catch(err=>console.log(err))
    }
    return (
        <div style={{marginTop:"100px"}}>
            <div style={{marginBottom:"50px",justifyContent:"center"}}>
                <input type="text" placeholder='search member...' onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
                <Button onClick={()=>searchMember(firstname)}>search</Button>
                <Button onClick={getMember}>view all members</Button>
            </div>
            <OneMember list={members} />
        </div>
    )
}

export default Members
