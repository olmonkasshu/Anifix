import React from "react"
import HeroPage from "./Components/Hero/HeroPage"
import Footer from "./Components/Footer/Footer"

import MyCard from "./Components/Card/MyCard"
import UpComing from "./Components/Card/UpComing"

function App() {
  return (
   <div>
      <HeroPage/>
      <MyCard />
      <UpComing />
      <Footer />
   </div>
  )
}

export default App
