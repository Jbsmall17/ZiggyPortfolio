import React,{useRef,useEffect} from 'react'
import "../Styles/comp2.css"

export default function Comp2() {
  const designRef = useRef(null);
  const divRef3 = useRef(null);
  
  function mouseMoveHandler3(event){
    const cursorX = event.clientX;
    const cursorY = event.clientY;
  const designContainerTop = designRef.current.getBoundingClientRect().top
    const designContainerLeft = designRef.current.getBoundingClientRect().left
    const newCursorX = cursorX - designContainerLeft;
    const newCursorY = cursorY - designContainerTop
    divRef3.current.style.top = `${newCursorY}px`;
    divRef3.current.style.left = `${newCursorX}px`;
    // console.log(gifContainerLeft, gifContainerTop,cursorX,cursorY,newCursorX,newCursorY)
}
function mouseLeaveHandler2(event){
  divRef3.current.style.top = "80%";
  divRef3.current.style.left = "80%";
  divRef3.current.style.transform = "translateY(-50%) translateX(-50%)"
}
  useEffect(()=>{
    designRef.current.addEventListener("mousemove", mouseMoveHandler3)
    designRef.current.addEventListener("mouseleave", mouseLeaveHandler2)
    return () =>{
      designRef.current.removeEventListener("mousemove", mouseMoveHandler3)
      designRef.current.addEventListener("mouseleave", mouseLeaveHandler2)
    }
  },[])

  return (
    <div ref={designRef} className="design-it">
    <div className="container">
      <div>
      <div>
        <p>You</p>
        <p>dream it</p>
      </div>
      <div>
        <p>I</p>
        <p>design it</p>
      </div>
      </div>
    </div>
    <div ref={divRef3} className="lets-go-together">
      let's go together
    </div>
  </div>
  )
}
