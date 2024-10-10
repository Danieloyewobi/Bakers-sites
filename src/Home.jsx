// import React from 'react'

import Body from "./component/Body"
import Down from "./component/Down"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
// import Testmony from "./component/Testmony"

function Home() {
  return (
    <div>
        <Navbar/>
        <Body/>
        <Down/>
        {/* <Testmony/> */}
        <Footer/>
    </div>
  )
}

export default Home