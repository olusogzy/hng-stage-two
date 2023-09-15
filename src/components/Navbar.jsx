import React from 'react'
import   "../App.css"
import TV from "../icons/tv.svg"
import Menu from "../icons/Menu.svg"
import Search from "../icons/Search.svg"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='movie-box'>
            <img src={TV} alt='tv'></img>
            <h3>MovieBox</h3>
        </div>
        <div className='search-div'>
            <input placeholder='What do you want to watch?'></input>
            <img src={Search} alt='search'></img>
        </div>
        <div className='menu-div'>
            <h3>Sign in</h3>
            <img src={Menu} alt='menu'></img>
        </div>

    </div>
  )
}

export default Navbar


// 9ea3e26c3fe15640782a8ab5434a1bfe    api key