import React, { useEffect, useState } from 'react'
import './Dashboard_form.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard_form = () => {
  const [user, setuser] = useState([])
  const token = localStorage.getItem('token')
  const navigate=useNavigate()
  const showdata = async (e) => {
    e.preventDefault()
    const res = await axios.get('http://127.0.0.1:8000/register/',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }

      }
    )
    setuser(res.data.results)
  }
  useEffect(() => {
    showdata()
  }, [])

 const logout=async()=>{
  localStorage.removeItem('token')
  navigate('/')
 }

  return (
    <div className="dashboard-container">
      {user.map((item)=>(
        <div className="user-card" key={item.id}>
          <h3>{item.username}</h3>
          <p>{item.Role}</p>
          <p>{item.email}</p>
          <p>{item.password}</p>
        </div>
      ))}

      <br></br>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard_form
