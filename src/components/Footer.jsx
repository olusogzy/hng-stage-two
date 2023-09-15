import React from 'react'
import "../App.css"
import Facebook from "../icons/facebook.svg"
import Twitter from "../icons/twitter.svg"
import Instagram from "../icons/instagram.svg"
import Youtube from "../icons/youtube.svg"

function Footer() {
  return (
    <div className='d-flex-col footer'>
        <div className='footer-icon d-flex'>
            <img src={Facebook} alt='facebook'></img>
            <img src={Instagram} alt='instagram'></img>
            <img src={Twitter} alt='twitter'></img>
            <img src={Youtube} alt='youtube'></img>
            
        </div>

        <div className='d-flex footer-text'>
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <div>
            <p>© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
    </div>
  )
}

export default Footer

// <img src={Facebook} alt='facebook'></img>
//             <img src={Instagram} alt='instagram'></img>
//             <img src={Twitter} alt='twitter'></img>
//             <img src={Youtube} alt='youtube'></img>