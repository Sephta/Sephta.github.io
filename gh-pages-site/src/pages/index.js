import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingWrapper from "../components/wrappers/landingWrapper"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Put content here</h1>
  // </Layout>
  <LandingWrapper>
    <SEO title="Home" />
    <h1 className={"text-center text-5xl font-mono font-bold text-grey-900"}>
      HOME PAGE
    </h1>
  </LandingWrapper>
)

export default IndexPage
