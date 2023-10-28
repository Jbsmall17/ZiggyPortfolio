import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import Comp3 from '../components/Comp3'
import {useNavigate } from 'react-router-dom'
import "../Styles/learnmore.css"


const emailRegexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export default function Learnmore() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("");
  const [validity,setValidity] = useState(true)
  const [count,setCount] = useState(0); 
  
  function handleClick(){
    const isvalid = emailRegexPattern.test(email)
    if(isvalid){
      setValidity(true);
      setCount(1);
    }
    else{
      setValidity(false);
    }
  }
  return (
    <div className='learnmore-page'>
        <Navbar />
        <div className='learnmore-container'>
          { count== 1 ? 
              <div className='gracias-container'>
                <p className='gracias'>Gracias! Biyi will reach out to you shortly</p> 
              </div>
            :
              <div className='care-container'>
                <p className='care'>Care to know more?</p>
              </div>
            }
          {count == 0 
            && 
              (
                <input 
                  type='text'
                  className={validity  ? "correct" : "error"}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}} 
                  placeholder='Enter email address' 
                />
              )
          }
          {count == 1
            ? <div className='learnmore-div2' onClick={()=> navigate("/")}>
              Home
            </div>
           : (
            <div 
              className={validity ? "correct learnmore-div" : "error learnmore-div"}  
              onClick={handleClick}
            >
              learn more
            </div>
            )
            }
        </div>
        <Comp3 />
    </div>
  )
}
