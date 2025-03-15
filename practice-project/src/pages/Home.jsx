import React from 'react'
import Body from '../Body'
import Nav from '../Nav'
import { useState } from 'react'
const Home = () => {
    const [searchedText,setSearchedText]=useState([]);
  
  return (
    <div>
      <Nav searchedText={searchedText} setSearchedText={setSearchedText} />
      <Body searchedText={searchedText}/>
    </div>
  )
}

export default Home
