import React from 'react'
import Navbar from '../components/Navbar'
import Comp from '../components/Comp'
import Comp2 from '../components/Comp2'
import biyi from '../assets/Biyipage/Biyi_aroloye .png'
import design from '../assets/Biyipage/design.svg'
import consulting from '../assets/Biyipage/consulting.svg'
import strategy from '../assets/Biyipage/strategy.svg'
import skills_gif from '../assets/Biyipage/Tech-Stack-_-Biyi-Aroloye.gif'
import "../Styles/biyipage.css"



export default function Biyi() {
  return (
    <div className='biyipage'>
      <Navbar page={"biyi"} />
      <div className='meet-biyi'>
        <div className='meet-biyi-01'>
          <img src={biyi} loading='lazy' alt='a picture of biyi aroloye' />
          <p>Meet Biyi</p>
        </div>
        <div className='meet-biyi-02'>
          <p>
              Biyi Aroloye is an ace  trans-disciplinary designer and strategist, 
              specializing in the realms of visual design, brand strategy, 
              and digital product design- strategy. 
          </p>
          <p>
              He is on a mission to design some of the world’s best brands and 
              digital product solutions that improve  human experience on Earth.
          </p>
          <p>
            With a track record of serving 25+ brands and completing over 1000 design projects, 
            Biyi continues to design dreams and visualize visions in the media and tech space. 
          </p>
          <p>
            His unique blend of creative intelligence skills and  trans-disciplinary 
            background places him in a league of his own among professionals in his domain
          </p>
          <p>
            He holds a BSc in Biochemistry from the University of Lagos, complemented by various design certifications. 
            Biyi is a devoted Christian committed to advancing God’s kingdom on Earth.
          </p>
          <p>
            Like a key ingredient in a recipe, Biyi is a valuable asset in any organization. 
          </p>
        </div>
      </div>
      <div className='services-container'>
        <div className='design'>
          <img src={design} loading='lazy' alt="design pictoral representation" />
          <p>Design</p>
          <div className='hover-div'>
            <p>Visualize your Ideas</p>
            <div className='div-circle'>
              Let's Talk
            </div>
          </div>
        </div>
        <div className='strategy'>
          <img src={strategy} loading='lazy' alt='strategy pictoral representation' />
          <p>Strategy</p>
          <div className='hover-div'>
            <p>Execute your goals</p>
            <div className='div-circle'>
              Let's Talk
            </div>
          </div>
        </div>
        <div className='consulting'>
          <img src={consulting} loading='lazy' alt='consulting pictoral representation' />
          <p>consulting</p>
          <div className='hover-div'>
            <p>Enlighten your mind</p>
            <div className='div-circle'>
              Let's Talk
            </div>
          </div>
        </div>
      </div>
      <div className='skills-gif'>
        <img src={skills_gif} loading='lazy' alt='skills gif' />
      </div>
      <Comp2 />
      <Comp />
    </div>
  )
}
