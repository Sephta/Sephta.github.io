import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyIcon from "../../images/gatsby-icon.png";
import CodeIcon from "../../images/coding.svg";
import SunIcon from "../../images/sun.svg";
import MoonIcon from "../../images/moon.svg";
import { BackgroundColor } from "gatsby-cli/node_modules/chalk";

import "../../css/styles.css";

const Header = ({ useTailwind, siteThemeState, ...props }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            github
            linkedIn
          }
        }
      }
    `
  );

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
          <HeaderWrapper id={"header-wrapper"}>
            {/* PUT NAME and Maybe logo here */}
            <SiteHeaderTitle>Seth Tal</SiteHeaderTitle>

            <ThemeSwitchButton
              id={"theme-switch-button"}
              className={"noTextHighlight styles-default-hover"}
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

            <NavWrapper>
              <NavItem
                className={`noTextHighlight styles-navItem-hover styles-dark-box-shadow `}
                // href={"#projects"}
                themeSettings={siteThemeState.state}
              >
                <Link to={`/#projects`}>Portfolio</Link>
              </NavItem>
              <NavItem
                className={`noTextHighlight styles-navItem-hover styles-dark-box-shadow`}
                // href={site.siteMetaData?.github || `#`}
                themeSettings={siteThemeState.state}
              >
                <Link to={site.siteMetaData?.github || `#`}>GitHub</Link>
              </NavItem>
              <NavItem
                className={`noTextHighlight styles-navItem-hover styles-dark-box-shadow`}
                // href={"#contact"}
                themeSettings={siteThemeState.state}
              >
                <Link to={`#contact`}>Contact</Link>
              </NavItem>
            </NavWrapper>
          </HeaderWrapper>
        </>
      )}
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 100px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;

  scroll-behavior: smooth;
`;

const SiteHeaderTitle = styled.h1`
  margin: 0 0 0 1em;

  font-size: 24px;
`;

const ThemeSwitchButton = styled.a`
  margin: 1em 1em 1em auto;
  padding: 1em;

  /* border: 1px solid green; */
  border-radius: 1em;

  ${props =>
    props.themeSettings
      ? css`
          box-shadow: 2px 2px 5px #00000036;
        `
      : css`
          box-shadow: 2px 2px 5px #00000036;
          background-color: #232323;
        `}
`;

const ThemeSwitchIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.a`
  width: 100px;
  height: 50px;
  /* padding: 1em; */
  margin: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  border: 1px solid #e7e7e7;
  border-radius: 5px;

  :link {
    color: ${props =>
      props.themeSettings
        ? css`var(--background-dark)`
        : css`var(--background-light)`};
  }

  :visited {
    color: ${props =>
      props.themeSettings
        ? css`var(--background-dark)`
        : css`var(--background-light)`};
  }
`;
