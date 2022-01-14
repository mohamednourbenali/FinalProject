import React, { useState } from 'react'
import Course from './Course'
import AddCourse from './AddCourse'
import Members from './Members'
import {Button} from 'react-bootstrap'
const Admin = () => {
    const [showCourse,setShowCourse] = useState(false);
    const [showMember,setShowMember] = useState(false);
    const handleCourse=()=>{
        if(showCourse){
            setShowCourse(false);
        }else{
            setShowCourse(true);
            setShowMember(false);
        }
    }
    const handlemembers=()=>{
        if(showMember){
            setShowMember(false);
        }else{
            setShowMember(true);
            setShowCourse(false);
        }
    }
    return (
        <div style={{marginTop:"80px"}}>
            <div style={{display:"flex",justifyContent:"space-around",textAlign:"center"}}>
               <Button onClick={handleCourse} style={{}}>course</Button>
               <Button onClick={handlemembers}>members</Button>
               <hr/>
            </div>
            <div>
                <h1 style={{textAlign:"center",marginTop:"100px"}}>Bö-SPORT</h1>
            </div>
            <div>
                {showCourse? <><Course/></>:null}
                {showMember? <Members/>:null}
            </div>
        </div>
    )
}

export default Admin
