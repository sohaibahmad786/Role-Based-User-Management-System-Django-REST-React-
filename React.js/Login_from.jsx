import React, { useState } from 'react'
import './Login_form.css'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login_form = () => {
    const navigate = useNavigate()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')


    const Login_handle = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://127.0.0.1:8000/login/', {
                username,
                password,
            })
            localStorage.setItem('token', res.data.access)
            navigate('/dashboard')
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">
            <form onSubmit={Login_handle}>
                <input type='text' placeholder='Enter Username' onChange={(e) => setusername(e.target.value)} />
                <input type='password' placeholder='Enter Strong Password' onChange={(e) => setpassword(e.target.value)} />
                <button type='submit'>Sign in</button>
            </form>
            <p> Don't have an account? <Link to={'/register'}>Sign up</Link></p>
        </div>
    )
}

export default Login_form
