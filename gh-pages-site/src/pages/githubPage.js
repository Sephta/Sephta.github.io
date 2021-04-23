import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import LandingWrapper from "../components/wrappers/landingWrapper"

const githubPage = () => {
  return (
    <>
      <LandingWrapper>
        <SEO title="GitHub" />
        <h1
          className={"text-center text-5xl font-mono font-bold text-grey-900"}
        >
          GitHub Page
        </h1>
      </LandingWrapper>
    </>
  )
}

export default githubPage
