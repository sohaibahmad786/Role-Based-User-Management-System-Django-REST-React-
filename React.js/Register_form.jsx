import React, { useState } from 'react'
import './Register_form.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register_form = () => {
  const navigate=useNavigate()
  const [username, setusername] = useState('')
  const [Role, setRole] = useState('user')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

 const register_handle=async(e)=>{
  e.preventDefault()
  try{
    await axios.post('http://127.0.0.1:8000/register/',{
      username,
      Role,
      email,
      password
    })
    alert("User Successfully Register")
    navigate('/')
  }
  catch(error){
    console.log(error)
    alert('Please try again........')
  }
 }

  return (
    <div className="register-container">
      <form onSubmit={register_handle}>
        <input type='text' placeholder='Enter Username' value={username} onChange={(e)=>setusername(e.target.value)} />
        <select value={Role} onChange={(e)=>setRole(e.target.value)}>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>
        <input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setemail(e.target.value)} />
        <input type='password' value={password} placeholder='Enter Strong Password' onChange={(e)=>setpassword(e.target.value)} />
        <br></br>
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Register_form
