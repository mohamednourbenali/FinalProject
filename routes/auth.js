const router = require('express').Router()
const Member = require('../models/member')
const bcrypt = require("bcrypt")
const {validator , loginRules , registerRules} = require('../middleware/bodyValidator')
const jwt = require('jsonwebtoken')
const isAuth = require('../middleware/isAuth')


router.post("/register" , registerRules(), validator  ,  async (req , res )=>{

const { firstname, lastname  ,email , password} =req.body
try{
let member = await Member.findOne({email})
if(member)
{
    return res.status(400).send({msg : "member already exist"})
}

member = new Member ({
    firstname,
    lastname,
    email, 
    password,
})
// hash the password
const salt = 10 
const hashedpassword = await bcrypt.hash(password ,salt) ;
member.password = hashedpassword ;
await member.save()

const payload ={
    _id : member._id
}
const token = await jwt.sign(payload , process.env.secretOrkey)


res.status(200).send({msg : "member saved " , member , token})
}catch(error)
{
    res.status(500).send({msg : "error server " });
}
    res.send({msg : "register"});
});


router.post("/login" ,  async (req , res )=>{
    const { email , password} = req.body
    try{
       const member = await Member.findOne({email})
       if(!member)
       {
        return res.status(400).send({msg : "email already exist"})
       }
        const isMatch= await bcrypt.compare(password , member.password) ;

        if(!isMatch)
        {
        return res.status(400).send({msg : "bad credential password"})
       
        }

        const payload ={
            _id : member._id
        }
    const token = await jwt.sign(payload , process.env.secretOrkey)
        res.status(200).send({msg : "login Success" , member :convertMember(member) ,token})
    }
    catch(error)
    {
        return res.status(500).send({msg : "error server"})
        console.log(error)
    } 
})


router.get('/me' ,isAuth ,(req , res)=>{
       res.status(200).send({member : req.member})
})

module.exports = router

const convertMember =({firstname,lastname , email , _id,role})=>({
    firstname ,
    lastname,
    email ,
    _id,
    role
})