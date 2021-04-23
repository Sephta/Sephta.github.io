import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import GatsbyIcon from "../../images/gatsby-icon.png"
import CodeIcon from "../../images/coding.svg"

const Header = ({ props }) => {
  return (
    <>
      <div
        id="header-wrapper"
        className={"flex items-center border-2 border-solid border-grey-900"}
      >
        <img className={"w-14 h-14 m-1"} src={CodeIcon} alt="gatsby icon" />
        <h1 className={"m-1"}>Seth Tal | Aspiring Software Developer</h1>

        <ul
          id="header-tabs"
          className={"flex items-center flex-row justify-self-end order-last"}
        >
          <Link to="/">
            <li
              className={
                "m-2 p-1 \
                bg-gray-100 \
                border-2 border-solid border-grey-900 rounded \
                color-white \
                transition-all delay-75 \
                hover:bg-gray-300 \
                active:bg-gray-400"
              }
            >
              Home
            </li>
          </Link>
          <Link to="/githubPage">
            <li
              className={
                "m-2 p-1 border-2 border-solid border-grey-900 rounded"
              }
            >
              Github
            </li>
          </Link>
          <Link to="/portfolioPage">
            <li
              className={
                "m-2 p-1 border-2 border-solid border-grey-900 rounded"
              }
            >
              Portfolio
            </li>
          </Link>
          <Link to="/contactPage">
            <li
              className={
                "m-2 p-1 border-2 border-solid border-grey-900 rounded"
              }
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Header

const HeaderWrapper = styled.div``
