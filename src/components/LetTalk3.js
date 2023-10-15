import React, { useState } from 'react'
import "../Styles/letstalk3.css"

export default function LetTalk3({validity, text, setText}) {
  // const [text, setText] = useState("")
  const [charactercount, setCharacterCount] = useState(0);

  function changeHandler(e){
    const characterLength = e.target.value.length
    if(characterLength <= 200){
      setText(e.target.value)
      setCharacterCount(characterLength)
    }
    else{
      return
    }
  }

  return (
    <div className='lettalk3'>
      <div className='typewriter3'>
        <p>A.O.I(Any other information)</p>
      </div>
      {/* <input 
        type='text' 
        placeholder='kindly enter email or company email'  
        /> */}
      <textarea 
        name="text"
        className={!validity ? "error" : "desktop"}
        value={text}
        onChange={changeHandler}
        placeholder='Feel free to express your needs' 
        // cols="80" rows="5"
        >
      </textarea>
      {/* <textarea 
        name="text"
        className={!validity ? "error" : "mobile"}
        value={text}
        onChange={changeHandler}
        placeholder='Feel free to express your needs' cols="40" rows="5">
      </textarea> */}

      {text.length >= 200 
      ? 
        <p className='error'>You have exited the character limit</p>
      : <p className='charactercount'>{charactercount}/200</p>
      }
    </div>
  )
}
