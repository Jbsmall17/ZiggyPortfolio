import React,{useState,useEffect,useRef} from 'react'
import "../Styles/letstalk1.css"

export default function LetTalk1() {
    const selectRef = useRef(null);
    const [change,setChange] = useState(false)
    const [countries,setCountries] = useState([])
    function allCountry(){
      if(countries){
        console.log(selectRef.current)
        countries.forEach(country => {
          const option = document.createElement('option');
          option.text = country;
          option.value = country;
          selectRef.current.appendChild(option);
     });
      }
    }
    allCountry()
    useEffect(()=>{
      const endpoint = "https://restcountries.com/v3.1/independent?status=true"
      fetch(endpoint)
      .then((response)=> response.json())
      .then((response)=> {
        const allCountry = [];
        response.forEach((country,index) => {
          if(typeof country.name.common !== "string"){
            return
          }
          allCountry.push(country.name.common)
        });
        allCountry.sort()
        setCountries([
          ...countries, ...allCountry 
        ])      
      })
    },[change])


  return (
    <div className='lettalk1'>
      <div className='typewriter'>
        <p>Hello, I Would to connect with you</p>
        
      </div>
      <input 
        type='text' 
        placeholder='kindly enter email or company email'  
        />
        <select ref={selectRef} id="countrySelect">
            <option value="">select Country</option>
        </select>
    </div>
  )
}
