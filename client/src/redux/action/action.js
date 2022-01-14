import {ADDMEMBER,LOGIN_USER,AUTH_ERROR,GET_AUTH_USER,SET_LOADING,REGISTER_USER,LOGOUT,GET_USER} from './actionTypes';
import axios from 'axios'

// register user
export const register = (formData) =>async (dispatch) =>{
    dispatch(setLoading())
try {
    const res = await axios.post("auth/register" , formData) ;

    dispatch({
        type :REGISTER_USER ,
        payload : res.data
    })
} catch(error) {
  console.dir(error)
  const errorsArray = error.response.data.errors
  const msg = error.response.data.msg
 
  
  if(Array.isArray(errorsArray)){
   errorsArray.forEach(el=>alert(el.msg))
}
if(msg)
{
   alert(msg)
}
  dispatch({
   type : AUTH_ERROR
})
}
}

export const login = (formdata) => async(dispatch) =>{
    dispatch(setLoading())
    try{
        const res = await axios.post('auth/login',formdata)
        dispatch({
            type : "LOGIN_USER",
            payload : res.data
        })
    }catch(error){
        console.dir(error);
        const errorsArray = error.response.data.errors;
        const msg = error.response.data.msg

        if (Array.isArray(errorsArray)){
            errorsArray.forEach(el=>alert(el.msg))
        }
        if(msg)
        {
            alert(msg)
        }
           dispatch({
            type : AUTH_ERROR
        })
    }
}


export const getAuthUser = () => async (dispatch) => {
    dispatch(setLoading())
    try {
     const option = {
         headers :{
            authorization : localStorage.getItem("token") 
         }
        
     }

          const res = await axios.get("/auth/me" , option)
          dispatch ({
              type : GET_AUTH_USER ,
              payload : res.data ,
          })
    }catch(error){
      console.log(error)
      dispatch({
          type : AUTH_ERROR
      })
    }
}
const setLoading = () => dispatch => {
    dispatch({
        type :  SET_LOADING
    })
}
export const logout = () => dispatch =>{
    dispatch({
        type:LOGOUT
    })
}

export const getUser =(formData) => async(dispatch)=>{
    try{
        console.log("data to be sent to the server : ",formData)
        const res = await axios.get('/app/search',formData);
        dispatch({
            type : "GET_USER",
            payload : res.data
        });
    }catch(error){
        console.log("error in action.js : ",error);
    }
}

