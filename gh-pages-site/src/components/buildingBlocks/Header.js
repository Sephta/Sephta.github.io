import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import GatsbyIcon from "../../images/gatsby-icon.png";
import CodeIcon from "../../images/coding.svg";
import SunIcon from "../../images/sun.svg";
import MoonIcon from "../../images/moon.svg";
import { BackgroundColor } from "gatsby-cli/node_modules/chalk";

const Header = ({ useTailwind, siteThemeState, ...props }) => {
  return (
    <>
      {useTailwind ? (
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
      ) : (
        <>
          <HeaderWrapper>
            <ThemeSwitchButton
              id={"theme-switch-button"}
              themeSettings={siteThemeState.state}
              onClick={e => {
                siteThemeState.setState(!siteThemeState.state);
                console.log("Theme State: ", siteThemeState.state);
              }}
            >
              {siteThemeState.state ? (
                <ThemeSwitchIcon src={MoonIcon} alt="" />
              ) : (
                <ThemeSwitchIcon src={SunIcon} alt="" />
              )}
            </ThemeSwitchButton>
          </HeaderWrapper>
        </>
      )}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  /* width: auto; */
  height: 100px;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  border: 1px solid red;
`;

const ThemeSwitchButton = styled.a`
  margin: 1em;
  padding: 1em;

  /* border: 1px solid green; */
  border-radius: 1em;

  ${props =>
    props.themeSettings
      ? css`
          box-shadow: 2px 2px 5px #00000036;
        `
      : css`
          box-shadow: 2px 2px 5px #ffffff36;
          background-color: #232323;
        `}
`;

const ThemeSwitchIcon = styled.img`
  width: 36px;
  height: 36px;
`;
