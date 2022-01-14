const { body, validationResult } = require('express-validator');

const registerRules = () =>[
    body("firstname", "firstname is required").notEmpty(),
    body("lastname","lastname is required ").notEmpty(),
    body("email", "invalid email ").isEmail(),
    body("password", "password must containt at least 6 characters ").isLength({min : 6,max:20}),    
] ;


const loginRules = () =>[
    
    body('email' , "email is required").isEmail(),
    body('password' , "password must containt at least 6 characters ").isLength({
        min : 6 ,
        max : 20 ,
    }),
]

const validator = (req , res , next )=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array().map((el)=> ({
          msg : el.msg
        })),
    });
    }
   next();
}


module.exports = {
    validator ,
    loginRules ,
    registerRules
} 