import React from 'react'
import "../App.css"
import Poster from "../images/Poster.png"
import Navbar from '../components/Navbar'
import Imdb from "../icons/IMDB.svg"
import Play from "../icons/Play.svg"
import Pngitem from "../icons/Pngitem.svg"

function Header() {
  return (
    <div className='header-div'>
        <Navbar />
        <div className='header-wrepper'>
            <div className='john-div'>
                <h1>
                    John Wick 3 :<br></br> Parabellum
                </h1>
            </div>
            <div className='header-icon-div'>
                <div className='header-icon-div-one'>
                    <img src={Imdb} alt='imdb'></img>
                    <p>86.0/100</p>
                </div>
                <div className='header-icon-div-two'>
                    <img src={Pngitem} alt='pngitem'></img>
                    <p>90%</p>
                </div>

            </div>
            <div className='header-parag-div'>
                <p>John Wick is on the run after killing a member <br></br> of the international assassins' guild, and with<br></br> a $14 million price tag on his head, he is the<br></br> target of hit men and women everywhere.</p>
                <button><img src={Play} alt='play'></img>WATCH TRAILER</button>
            </div>
        </div>

    </div>
  )
}

export default Header