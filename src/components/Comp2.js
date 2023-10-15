import React,{useRef,useEffect} from 'react'
import "../Styles/comp2.css"

export default function Comp2() {
  const designRef = useRef();
  const divRef3 = useRef();
  const dreamItRef = useRef();
  const designItRef = useRef();  

  function mouseMoveHandler3(event){
    const cursorX = event.clientX;
    const cursorY = event.clientY;
  const designContainerTop = designRef.current.getBoundingClientRect().top
    const designContainerLeft = designRef.current.getBoundingClientRect().left
    const newCursorX = cursorX - designContainerLeft;
    const newCursorY = cursorY - designContainerTop;
    divRef3.current.classList.remove("disappear")
    divRef3.current.classList.add("appear")
    divRef3.current.style.top = `${newCursorY}px`;
    divRef3.current.style.left = `${newCursorX}px`;
    // console.log(gifContainerLeft, gifContainerTop,cursorX,cursorY,newCursorX,newCursorY)
}
function mouseLeaveHandler2(event){

  divRef3.current.classList.remove("appear")
  divRef3.current.classList.add("disappear")
  // divRef3.current.style.top = "80%";
  // divRef3.current.style.left = "80%";
  // divRef3.current.style.transform = "translateY(-50%) translateX(-50%)"
}

useEffect(()=>{
  const dreamItRefNode = dreamItRef.current
  const observe = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dreamItRefNode.classList.add("scrollTo")
        }
        else{
          dreamItRefNode.classList.remove("scrollTo")
        }
      });
    }
  );

  if (dreamItRefNode) {
    observe.observe(dreamItRefNode);
  }

  return () => {
    // Clean up the observer when the component unmounts.
    observe.disconnect();
  };

},[])

useEffect(()=>{
  const designItRefNode = designItRef.current
  const observe = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          designItRefNode.classList.add("scrollTo")
        }
        else{
          designItRefNode.classList.remove("scrollTo")
        }
      });
    }
  );

  if (designItRefNode) {
    observe.observe(designItRefNode);
  }

  return () => {
    // Clean up the observer when the component unmounts.
    observe.disconnect();
  };

},[])

  useEffect(()=>{
    const designNode = designRef.current

    designNode.addEventListener("mousemove", mouseMoveHandler3)
    designNode.addEventListener("mouseleave", mouseLeaveHandler2)
    
    return () =>{
      designNode.removeEventListener("mousemove", mouseMoveHandler3)
      designNode.removeEventListener("mouseleave", mouseLeaveHandler2)
    }
  },[])

  return (
    <div ref={designRef} className="design-it">
    <div className="container">
      <div>
      <div ref={dreamItRef}>
        <p>You</p>
        <p>dream it</p>
      </div>
      <div ref={designItRef}>
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
