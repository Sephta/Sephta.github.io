import React from "react"
import Header from "../buildingBlocks/Header"
import Footer from "../buildingBlocks/Footer"

const LandingWrapper = ({ children, ...props }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LandingWrapper
