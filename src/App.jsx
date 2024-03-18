import React from "react"
import HeroPage from "./Components/Hero/HeroPage"
import Footer from "./Components/Footer/Footer"

import MyCard from "./Components/Card/MyCard"
import UpComing from "./Components/Card/UpComing"
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return (
   <div className="container">
      <Navbar />
      <HeroPage/>
      <MyCard />
      <UpComing />
      
      <Footer />
   </div>
  )
}

export default App
