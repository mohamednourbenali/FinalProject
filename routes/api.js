const express = require('express');

const router = express.Router();

const member = require('../models/member');
const course = require('../models/course')

// Routes
router.get ('/',(req,res)=>{
    res.end('salut tout le monde !');
});
// inserting a member
router.post('/save',(req,res)=>{
    console.log('Body : ',req.body);
    const data = req.body;
    const newMember = new member(data);

    newMember.save((error)=>{
        if (error){
            res.status(500).json({msg:'Sorry, internal server errors'});
        }else{
            res.json('your data has been saved !');
        }
    })
});

// deleting a member
router.delete('/delete/:_id' , (req , res)=>{
    const {_id} =  req.params 
 
    member.deleteOne({_id})
    .then(member =>res.send(member))
    .catch(err=> console.log(err))
 
});

// viewing all members
router.get('/names',(req,res)=>{
    member.find({})
        .then((data)=>{
            console.log('data : ',data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error : ',error);
        })
});

// searching for a member by firstname
router.get('/search/:firstname',(req,res)=>{
    const {firstname} = req.params;
    member.find({firstname})
        .then((member)=>{res.send(member)})
        .catch((error)=>{
            console.log('error : ',error);
        })
});

router.get('/getuser/:email',(req,res)=>{
    const {email} = req.params;
    member.find({email})
        .then((member)=>{res.send(member)})
        .catch((error)=>{
            console.log('error ',error);
        })
})

// updating a member data
router.put('/update/:_id',(req,res)=>{
    const {_id} = req.params;
    const {firstname,lastname,email}= req.body;
    member.findByIdAndUpdate({_id},{$set:{firstname , lastname , email}})
        .then(member=>{
            res.send(member)
            console.log("data modified")})
        .catch((error)=>{
            console.log('error : ',error);
        });
})


// inserting a new course
router.post('/savecourse',(req,res)=>{
    console.log('Body : ',req.body);
    const data = req.body;
    const newCourse = new course(data);

    newCourse.save()
        .then(course => res.send(course))
        .catch(err=>console.log("error",err))
});

// viewing all courses
router.get('/courses',(req,res)=>{
    course.find({})
        .then((data)=>{
            console.log('data : ',data);
            res.json(data);
        })
        .catch((error)=>{
            console.log('error : ',error);
        })
});

// updating course
router.put('/updateCourse/:_id',(req,res)=>{
    const {_id} = req.params;
    const {title,date,group}= req.body;
    course.findOneAndUpdate({_id},{$set:{title , date , group}})
        .then(course=>res.send(course))
        .catch((error)=>{
            console.log('error : ',error);
        });
})
// deleting course
router.delete('/deleteCourse/:_id' , (req , res)=>{
    const {_id} =  req.params 
 
    course.deleteOne({_id})
    .then(course =>res.send(course))
    .catch(err=> console.log(err))
});
// searching course by title
router.get('/searchCourse/:title',(req,res)=>{
    const {title} = req.params;
    course.find({title})
        .then((course)=>{res.send(course)})
        .catch((error)=>{
            console.log('error : ',error);
        })
});

router.put('/reserve/:title',(req,res)=>{
    const {title} = req.params;
    const {firstname} = req.body;
    course.findOneAndUpdate({title},{$push:{firstname:{firstname}}})
    .then(course=>{
        res.send(course)
        console.log("c est bon !!!")
    })
    .catch((error)=>{
        console.log('error : ',error);
    });
})

module.exports = router ;
