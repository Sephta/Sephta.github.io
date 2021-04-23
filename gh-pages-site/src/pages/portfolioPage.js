import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import LandingWrapper from "../components/wrappers/landingWrapper"

const portfolioPage = () => {
  return (
    <>
      <LandingWrapper>
        <SEO title="Portfolio" />
        <h1
          className={"text-center text-5xl font-mono font-bold text-grey-900"}
        >
          Porfolio Page
        </h1>
      </LandingWrapper>
    </>
  )
}

export default portfolioPage
