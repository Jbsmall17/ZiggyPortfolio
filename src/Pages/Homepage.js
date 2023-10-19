import React,{useEffect,useRef, useState} from 'react'
import '../Styles/homepage.css'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import Biyi_Aroloye from "../assets/Homepage/Biyi_Aroloye.gif"
import mission from "../assets/Homepage/Hand_of_Mission.png"
import mobileMission from "../assets/Homepage/mobile_asset.png"
import localization from "../assets/Homepage/Localization_Lab_1.png"
import policyLab from "../assets/Homepage/policyLab_2.png"
import AfricaPrudential from "../assets/Homepage/Africa_Prudential_3.png"
import kujaLink from "../assets/Homepage/Kujalink_4.png"
import NIIT from "../assets/Homepage/NIIT_5.png"
import DigitalFortess from "../assets/Homepage/Digital_fortress_6.png"
import lagosState from "../assets/Homepage/Lagos_state_7.png"
import Namelogo from "../assets/Homepage/Namelogo.svg"
import tetrat from "../assets/Homepage/tetrat_8.png"
import layer from "../assets/Homepage/Layer_9.png"
import mobileBrand1 from "../assets/Homepage/mobile_brand_1.png"
import mobileBrand2 from "../assets/Homepage/mobile_brand_2.png"
import mobileBrand3 from "../assets/Homepage/mobile_brand_3.png"
import mobileBrand4 from "../assets/Homepage/mobile_brand_4.png"
import mobileBrand5 from "../assets/Homepage/mobile_brand_5.png"
import mobileBrand6 from "../assets/Homepage/mobile_brand_6.png"
import mobileBrand7 from "../assets/Homepage/mobile_brand_7.png"




import Comp2 from '../components/Comp2'
import { useNavigate } from 'react-router-dom'




export default function Homepage() {
  const [bigScreen, setBigScreen] = useState(true)
  const brandDivRef = useRef();
  const brandRef = useRef();
  const designProjectRef = useRef()
  const brandProjectRef = useRef()
  const meetBiyiRef = useRef()
  const meetBiyiCta = useRef()
  const navigate = useNavigate()
  
  function mouseMoveHandler(event){
    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const brandContainerTop = brandRef.current.getBoundingClientRect().top
    const brandContainerLeft = brandRef.current.getBoundingClientRect().left
    const newCursorX = cursorX - brandContainerLeft;
    const newCursorY = cursorY - brandContainerTop;
    brandDivRef.current.classList.remove("disappear")
    brandDivRef.current.classList.add("appear")
    brandDivRef.current.style.top = `${newCursorY}px`;
    brandDivRef.current.style.left = `${newCursorX}px`;
    // console.log(gifContainerLeft, gifContainerTop,cursorX,cursorY,newCursorX,newCursorY)
}

function mouseMoveHandler2(event){
  let NavEl;
  if(window.innerWidth >= 768){
     NavEl = document.querySelectorAll(".navbar")[0].getBoundingClientRect().height - 130
     setBigScreen(true)
  }
  else{
    NavEl = document.querySelectorAll(".navbar")[1].getBoundingClientRect().height - 50
    setBigScreen(false)
  }
  // console.log(NavEl.getBoundingClientRect().height)
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const meetbiyiContainerTop = NavEl
  const meetbiyiContainerLeft = meetBiyiRef.current.getBoundingClientRect().left
  const newCursorX = cursorX - meetbiyiContainerLeft;
  const newCursorY = cursorY - meetbiyiContainerTop;
  meetBiyiCta.current.classList.remove("disappear")
  meetBiyiCta.current.classList.add("appear")
  meetBiyiCta.current.style.top = `${newCursorY}px`;
  meetBiyiCta.current.style.left = `${newCursorX}px`;
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
    brandDivRef.current.classList.remove("appear")
    brandDivRef.current.classList.add("disappear")
    // brandDivRef.current.style.top = `100%`;
    // brandDivRef.current.style.left = `50%`;
    // brandDivRef.current.style.transform = "translateY(-100%) translateX(-50%)"
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
          if (entry.isIntersecting) {
            brandProjectRefNode.classList.add("scrollTo")
          }
          else{
            brandProjectRefNode.classList.remove("scrollTo")
          }
        },{
          threshold: 0.25
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
          if (entry.isIntersecting) {
            designProjectRefNode.classList.add("scrollTo")
          }
          else{
            designProjectRefNode.classList.remove("scrollTo")
          }
        },{
          treshold: 0.25
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
      <div className='homepg-mission'>
          <div className="homepg-mission-para">
          <p>My</p>
          <p>Mission</p>
          </div>
          <img className='mission-img' src={mission} alt='biyi pictoral representation of mission'></img>
          <img className='mobile-mission-img' src={mobileMission}  alt='biyi pictoral representation of mission' />
      </div>
      <div className='homepg-brand' ref={brandRef}>
          <div className='homepg-brand-flex'>
            <div ref={designProjectRef}>
              <p>1000+</p>
              <p>design projects</p>
            </div>
            <div ref={brandProjectRef}>
              <p>30+</p>
              <p>brands served</p>
            </div>
          </div>
          <div className='homepg-brand-container-main'>
          <div className='homepg-brand-container'>
            <img src={localization} alt='localization'></img>
            <img src={policyLab} alt="policy-lab" />
            <img src={AfricaPrudential} alt='africa-prudential' />
            <img src={kujaLink} alt='kajalink' />
            <img src={NIIT} alt='NIIT' />
            <img src={DigitalFortess} alt='Digital- fortress' />
            <img src={lagosState} alt='lagos state' />
            <img src={tetrat} alt='tetrat' />
            <img src={layer} alt="layer" />
          </div>
          <div className='homepg-brand-container-mobile'>
            <img src={mobileBrand1} alt='biyi brand partnership' />
            <img src={mobileBrand2} alt='biyi brand partnership' />
            <img src={mobileBrand3} alt='biyi brand partnership' />
            <img src={mobileBrand4} alt='biyi brand partnership' />
            <img src={mobileBrand5} alt='biyi brand partnership' />
            <img src={mobileBrand6} alt='biyi brand partnership' />
            <img src={mobileBrand7} alt='biyi brand partnership' />
          </div>
          </div>
          <div ref={brandDivRef} className='homepg-brand-portfolio'>View Portfolio</div>
      </div>
      <Comp2 />
      <Comp />
    </div>
  )
}
