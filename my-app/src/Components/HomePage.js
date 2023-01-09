//[AppComp 1.05]

import React from 'react'
import MenuAppBar from './Appbar2'
import DirectionStack from './PageLinks'
import logo from './CollectaConKansas.jpg'


export default function HomePage() {
  return (
    <div>
      <br></br>
      <h1 style={{color: "#000000"}} > The Central Source for DBSCG Competitive Information </h1>
      <h2> Check out our Index of Event Topping Leaders or our History of Competitive Events</h2>
        <img width={800} height={400} src="http://www.dbs-cardgame.com/images/event/exhibition-event/dbscg-celebrations/logo.png"></img>
      <br></br>
      
        {/* <img width={800} height={500} src={logo}></img> */}

    </div>
  )
}
{/* <img alt='user' width={400} height={400}  src={''}></img> */}