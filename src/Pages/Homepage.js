import React,{useEffect,useRef,useState,useCallback} from 'react'
import '../Styles/homepage.css'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import Biyi_Aroloye from "../assets/Homepage/Biyi_Aroloye.gif"
import mission from "../assets/Homepage/Hand_of_Mission.png"
import mobileMission from "../assets/Homepage/mobile_asset.png"
import localization from "../assets/Logo Assets/LOcalization Lab 1.svg"
import policyLab from "../assets/Logo Assets/policyLAB-green-text-Horizontal (3) 1.svg"
import AfricaPrudential from "../assets/Logo Assets/Africa-Prudentia.svg"
import kujaLink from "../assets/Logo Assets/Kujalink 1.svg"
import NIIT from "../assets/Logo Assets/NIIT 1.svg"
import DigitalFortess from "../assets/Logo Assets/Digital fortress.svg"
import lagosState from "../assets/Logo Assets/Lagos State 1.svg"
import Namelogo from "../assets/Homepage/Namelogo.svg"
import tetrat from "../assets/Logo Assets/Tetratinu.svg"
import kite from "../assets/Logo Assets/Kite.svg"
import undp from "../assets/Logo Assets/UNDP.svg"



import Comp2 from '../components/Comp2'
import { useNavigate } from 'react-router-dom'




export default function Homepage() {
  const [designNumber,setDesignNumber] = useState(0)
  const designNumberRef = useRef(1000)
  const [brandNumber,setBrandNumber] = useState(0)
  const [bigScreen, setBigScreen] = useState(true)
  const missionDivRef = useRef();
  const brandLogoRef = useRef();
  const brandLogoRef2 = useRef();
  const brandDivRef = useRef();
  const brandRef = useRef();
  const designProjectRef = useRef()
  const brandProjectRef = useRef()
  const meetBiyiRef = useRef()
  const meetBiyiCta = useRef()
  const navigate = useNavigate()
  
  const changeDesignNumber = useCallback(() => {
        setDesignNumber((prev) => {
          if(prev > 999){
            return 1000
          }else{
            return prev + 1
          }
        });
  }, [designNumber]);

  const changeBrandNumber = useCallback(() => {
    setBrandNumber((prev) => {
      if(prev > 29){
        return 30
      }else{
        return prev + 1
      }
    });
}, [brandNumber]);
  

  function mouseMoveHandler(event){
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const brandContainerTop = brandRef.current.getBoundingClientRect().top
    const brandContainerLeft = brandRef.current.getBoundingClientRect().left
    const newCursorX = cursorX - brandContainerLeft;
    const newCursorY = cursorY - brandContainerTop;
    if(window.innerWidth >= 768){
      setBigScreen(true)
      brandDivRef.current.classList.remove("disappear")
      brandDivRef.current.classList.add("appear")
      brandDivRef.current.style.top = `${newCursorY}px`;
      brandDivRef.current.style.left = `${newCursorX}px`;
    }
    else{
      setBigScreen(false)
    }
    // console.log(gifContainerLeft, gifContainerTop,cursorX,cursorY,newCursorX,newCursorY)
}

function mouseMoveHandler2(event){
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  // const meetbiyiContainerTop = NavEl
  const meetbiyiContainerLeft = meetBiyiRef.current.getBoundingClientRect().left
  const meetbiyiContainerTop =  meetBiyiRef.current.getBoundingClientRect().top
  console.log(meetbiyiContainerLeft,meetbiyiContainerTop)
  const newCursorX = cursorX - meetbiyiContainerLeft;
  const newCursorY = cursorY + window.scrollY;
  if(window.innerWidth >= 768){
    setBigScreen(true);
    meetBiyiCta.current.classList.remove("disappear")
    meetBiyiCta.current.classList.add("appear")
    meetBiyiCta.current.style.top = `${newCursorY}px`;
    meetBiyiCta.current.style.left = `${newCursorX}px`;
  }else{
    setBigScreen(false)
  }
  // console.log(gifContainerLeft, gifContainerTop,cursorX,cursorY,newCursorX,newCursorY)
}
function mouseLeaveHandler2(event){
  const meetBiyiCta2 = meetBiyiCta.current
  meetBiyiCta2.classList.remove("appear")
  meetBiyiCta2.classList.add("disappear")
}

useEffect(()=>{
  const meetBiyiRefNode = meetBiyiRef.current
  meetBiyiRefNode.addEventListener("mousemove", mouseMoveHandler2)
  meetBiyiRefNode.addEventListener("mouseleave", mouseLeaveHandler2)
return () =>{
  meetBiyiRefNode.removeEventListener("mousemove", mouseMoveHandler2)
  meetBiyiRefNode.removeEventListener("mouseleave", mouseLeaveHandler2)
}
},[])

  function mouseLeaveHandler(event){
    console.log("mouse left")
    if(window.innerWidth >= 768){
      setBigScreen(true);
      brandDivRef.current.classList.remove("appear")
      brandDivRef.current.classList.add("disappear")
    }
    else{
      setBigScreen(false);
    }
  }
  useEffect(()=>{
      const brandRefNode = brandRef.current
      brandRefNode.addEventListener("mousemove", mouseMoveHandler)
      brandRefNode.addEventListener("mouseleave", mouseLeaveHandler)
    return () =>{
      brandRefNode.removeEventListener("mousemove", mouseMoveHandler)
      brandRefNode.removeEventListener("mouseleave", mouseLeaveHandler)
    }
},[])
  
  useEffect(()=>{
    const brandProjectRefNode = brandProjectRef.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          let intervalId;
          if (entry.isIntersecting) {
            brandProjectRefNode.classList.add("scrollTo")
            intervalId = setInterval(changeBrandNumber, 2000);
          }
          else{
            brandProjectRefNode.classList.remove("scrollTo")
            // clearInterval(intervalId)
            // setBrandNumber(0)
          }
        },{
          threshold: 1
        });
      }
    );

    if (brandProjectRefNode) {
      observe.observe(brandProjectRefNode);
    }

    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };

  },[])

  useEffect(()=>{
    const designProjectRefNode = designProjectRef.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          let intervalId;
          if (entry.isIntersecting) {
            designProjectRefNode.classList.add("scrollTo")
             intervalId = setInterval(changeDesignNumber, 0.5);
          }
          else{
            designProjectRefNode.classList.remove("scrollTo")
            // clearInterval(intervalId)
            // setDesignNumber(0)
          }
        },{
          treshold: 1
        });
      }
    );

    if (designProjectRef.current) {
      observe.observe(designProjectRef.current);
    }

    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };

  },[])

  useEffect(()=>{
    const missionDivRefNode = missionDivRef.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(window.scrollY)
          }
          else{
            console.log(window.scrollY)
          }
        },{
          threshold : 1
        });
      }
    );

    if (missionDivRefNode) {
      observe.observe(missionDivRefNode);
    }

    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };
  },[])

  useEffect(()=>{
    const brandLogoRefNode = brandLogoRef.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if(window.innerWidth >= 768){
              setBigScreen(true);
              brandLogoRefNode.classList.add("appear")
              const intervalId = setInterval(changeBrandNumber, 150);
            }
            else{
              setBigScreen(false)
            }
          }
          else{
            brandLogoRefNode.classList.remove("appear")
          }
        },{
          threshold : 1
        });
      }
    );

    if (brandLogoRefNode) {
      observe.observe(brandLogoRefNode);
    }

    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };
  },[])

  useEffect(()=>{
    const brandLogoRef2Node = brandLogoRef2.current
    const observe = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            brandLogoRef2Node.classList.add("appear")
          }
          else{
            brandLogoRef2Node.classList.remove("appear")
          }
        },{
          threshold : 1
        });
      }
    );

    if (brandLogoRef2Node) {
      observe.observe(brandLogoRef2Node);
    }

    return () => {
      // Clean up the observer when the component unmounts.
      observe.disconnect();
    };
  },[])


  return (
    <div className='homepage'>
      <Navbar page={"home"} />
      <div ref={meetBiyiRef} className='homepg-biyi'>
        <div className='homepg-biyi-image'>
            <img src={Biyi_Aroloye} alt="Biyi's image"></img>
        </div>
        <div className='homepg-biyi-text'>
          <img src={Namelogo} alt='name logo' />
          <p>KING of DESIGN-STRATEGY</p>
        </div>
        <div ref={meetBiyiCta} onClick={()=>navigate("/biyi")} className='homepg-biyi-cta'>
            Meet 'Biyi
        </div>
      </div>
      <div className='homepg-mission' ref={missionDivRef}>
          <div className="homepg-mission-para">
          <p>MY</p>
          <p>MISSION</p>
          </div>
          <img className='mission-img' src={mission} alt='biyi pictoral representation of mission'></img>
          <img className='mobile-mission-img' src={mobileMission}  alt='biyi pictoral representation of mission' />
      </div>
      <div className='homepg-brand' ref={brandRef}>
          <div className='homepg-brand-flex'>
            <div ref={designProjectRef}>
              <p>{designNumber}+</p>
              <p>design projects</p>
            </div>
            <div ref={brandProjectRef}>
              <p>{brandNumber}+</p>
              <p>brands served</p>
            </div>
          </div>
          <div className='homepg-brand-container-main'>
          <div className='homepg-brand-container'>
            <div ref={brandLogoRef}>
              <img src={localization} alt='localization hub' />
              <img src={policyLab} alt='policy lab' />
              <img src={AfricaPrudential} alt='Africa Presidential' />
              <img src={kujaLink} alt='kajalink' />
              <img src={kite} alt='kite' />
            </div>
            <div ref={brandLogoRef2}>
              <img src={NIIT} alt='NIIT' />
              <img src={DigitalFortess} alt='digital fortress' />
              <img src={lagosState} alt='lagos state' />
              <img src={undp} alt='undp' />
              <img src={tetrat} alt='tetrat' />
            </div>
          </div>
          </div>
          <div ref={brandDivRef} className='homepg-brand-portfolio'>View Portfolio</div>
      </div>
      <Comp2 />
      <Comp />
    </div>
  )
}
