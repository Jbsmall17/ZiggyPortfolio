import React from 'react'
import '../Styles/homepage.css'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import gif from "../assets/Homepage/Biyi_gif.gif"
import back_drop from "../assets/Homepage/Back_drop.png"
import mission_gif from "../assets/Homepage/mission.gif"
import Comp2 from '../components/Comp2'


export default function Homepage() {
  return (
    <div className='homepage'>
      <Navbar page={"home"} />
      <p className='name'>
        ‘Biyi Aroloye       
      </p>
      <div className='gif-container'>
        <img className='img backdrop1' loading='lazy' src={back_drop} alt="back drop background " />
        <img className='gif' src={gif} loading='lazy' alt="biyi's gif" />
        <img className='img backdrop2' loading='lazy' src={back_drop} alt="back drop background " />
      </div>
      <div className="mission">
        <div className='div01'>
          <img src={mission_gif} loading='lazy' alt="mission gif" />
        </div>
        <div className='div02'>
          <p className='para01'>
            My Mission is <span>Simple</span>
          </p>
          <p className="para02">
            To enhance human experience on Earth, using design and strategy to create first
            class visuals, brands, & product-solutions.
          </p>
          <div className="vector-img">
            <svg xmlns="http://www.w3.org/2000/svg" width="265" height="139" viewBox="0 0 265 139" fill="none">
              <path d="M264.135 70.0556H123.628L71.6229 121.969V70.0556H17.5411C14.7642 70.0525 12.1021 68.95 10.1386 66.99C8.17505 65.03 7.07059 62.3726 7.06747 59.6008V0H0V59.6008C0.00519619 64.243 1.85493 68.6936 5.14339 71.9762C8.43185 75.2587 12.8905 77.1051 17.5411 77.1103H64.5554V139L126.557 77.1103H264.135V70.0556Z" fill="black"/>
            </svg>
            <svg className='svg2' xmlns="http://www.w3.org/2000/svg" width="60" height="55" viewBox="0 0 60 55" fill="none">
              <path d="M37.5309 24.0588V0.542969H59.1259V18.9637C59.1259 28.9671 57.9205 36.2086 55.5098 40.6884C52.3451 46.6601 47.3337 51.1764 40.4757 54.2374L35.5677 46.3988C39.7283 44.7004 42.7922 42.1633 44.7593 38.7875C46.7265 35.4117 47.8232 30.5041 48.0496 24.0647L37.5309 24.0588ZM2.78252 24.0588V0.542969H24.3775V18.9637C24.3775 28.9671 23.1722 36.2086 20.7614 40.6884C17.5967 46.6601 12.5854 51.1764 5.7273 54.2374L0.819336 46.3988C4.97867 44.7004 8.04254 42.1633 10.011 38.7875C11.9794 35.4117 13.0761 30.5041 13.3013 24.0647L2.78252 24.0588Z" fill="black"/>
            </svg>
            <svg className='svg3' xmlns="http://www.w3.org/2000/svg" width="29" height="78" viewBox="0 0 29 78" fill="none">
              <path d="M21.2901 0V59.6008C21.287 62.3726 20.1825 65.03 18.219 66.99C16.2555 68.95 13.5933 70.0525 10.8165 70.0556H0.319336V77.1103H10.8165C15.4671 77.1051 19.9257 75.2587 23.2142 71.9762C26.5026 68.6936 28.3524 64.243 28.3576 59.6008V0H21.2901Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="exp-container">
        <div>
          <p>1000+</p>
          <p>Designs Executed</p>
        </div>
        <div className='line1'></div>
        <div>
          <p>7yrs+</p>
          <p>Dynamic Experience</p>
        </div>
        <div className='line2'></div>
        <div>
          <p>25+</p>
          <p>Brands Served</p>
        </div>
        </div>
        <div className="view-portfolio">
          View Portfolio
        </div>
      </div>
      <Comp2 />
      <Comp />
    </div>
  )
}
