import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Comp3 from '../components/Comp3'
import {useNavigate } from 'react-router-dom'
import "../Styles/learnmore.css"

export default function Learnmore() {
  const navigate = useNavigate()

  const [count,setCount] = useState(0)  
  return (
    <div className='learnmore-page'>
        <Navbar />
        <div className='learnmore-container'>
          { count== 1 ? 
            <p className='gracias'>Gracias! Biyi will reach out to you shortly</p> 
            :<p className='care'>Care to know more?</p>}
          {count == 0 && <input type='text' placeholder='Enter email address' />}
          {count == 1
            ? <div className='learnmore-div2' onClick={()=> navigate("/")}>
              Home
            </div>
           : <div className='learnmore-div' onClick={()=>{setCount(1)}}>
              learn more
            </div>
            }
        </div>
        <Comp3 />
    </div>
  )
}
