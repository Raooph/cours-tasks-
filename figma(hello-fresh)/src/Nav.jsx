import React from 'react'
import "./css/dropdown.css"
import "./css/index.css"
const Nav = () => {
  return (
    <div>
      <nav>
        <div><img id="logoImg" src="images-icons/Hello_Fresh_Lockup.png.png" alt="appleLogo" /></div>
        <div className='NavLinks'>
            <h2>Our Plans</h2>
            <h2>How It Works</h2>
            <ul class="menu">
          <li id="li1"><h2>Our Menus</h2></li>
          <ul class="Dropdown">
            <li>Dropdown 1</li>
            <li>Dropdown 2</li>
            <li>Dropdown 3</li>
            <li>Dropdown 4</li>
          </ul>
        </ul>
            <h2>Gift Cards</h2>
            <h2>Sustainability</h2>
            <h2>Thanksgiving Box</h2>
        </div>
        <button id='button1'>Log in</button>
      </nav>

    </div>
  )
}

export default Nav
