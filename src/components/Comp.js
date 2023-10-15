import React,{useRef, useEffect} from 'react'
import "../Styles/footer.css"
export default function Comp() {
    const footerRef = useRef();
    const mobileFooterRef = useRef()
    useEffect(()=>{
        const footerRefNode = footerRef.current
        const observe = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    footerRefNode.classList.add("scrollTo")
                  }
                  else{
                    footerRefNode.classList.remove("scrollTo")
                  }
                });
              }
        )
        
        if (footerRefNode) {
            observe.observe(footerRefNode);
          }
      
          return () => {
            // Clean up the observer when the component unmounts.
            observe.disconnect();
          };
    },[])
  
    useEffect(()=>{
        const mobileFooterRefNode = mobileFooterRef.current
        const observe = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    mobileFooterRefNode.classList.add("scrollTo")
                  }
                  else{
                    mobileFooterRefNode.classList.remove("scrollTo")
                  }
                });
              }
        )
        
        if (mobileFooterRefNode) {
            observe.observe(mobileFooterRefNode);
          }
      
          return () => {
            // Clean up the observer when the component unmounts.
            observe.disconnect();
          };
    },[])

    return (
    <div className='footer'>
    <div className='footer-container' ref={footerRef}>
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
    <div className='mobile-footer-container' ref={mobileFooterRef}>
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
