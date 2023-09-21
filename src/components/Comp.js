import React from 'react'
import "../Styles/footer.css"
export default function Comp() {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='footer-div-1'>
            <p>designed by <span>‘Biyi Aroloye</span></p>
        </div>
        <div className='footer-div-2'>
            <ul>
                <li>Meet ‘Biyi</li>
                <li>Portfolio</li>
                <li>Products</li>
                <li>Insights</li>
            </ul>
        </div>
        <div className='footer-div-3'>
            <p>&copy;</p>
            <p>2023</p>
        </div>
    </div>
    <div className='mobile-footer-container'>
        <ul>
            <li>Meet ‘Biyi</li>
            <li>Portfolio</li>
            <li>Products</li>
            <li>Insights</li>
        </ul>
        <div>
            <p>designed by <span>‘Biyi Aroloye</span></p>
            <div className='footer-div-3'>
            <p>&copy;</p>
            <p>2023</p>
        </div>
        </div>
    </div>
    <div className='footer-img'>   
    </div>
</div>
  )
}
