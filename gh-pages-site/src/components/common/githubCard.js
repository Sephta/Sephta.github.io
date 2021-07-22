import React from "react";
import styled, { css } from "styled-components";
import { DefaultWrapper } from "./commonStyles";
import ProgrammingLanguage from "./programmingLanguage";
import GitHubIcon from "../../images/github.svg";

const GithubCard = ({
  githubId,
  name,
  description,
  url,
  homepageUrl,
  stargazerCount,
  primaryLanguage,
  siteThemeState,
  ...props
}) => {
  return (
    <>
      <DefaultWrapper>
        <a href={url}>
          <CardWrapper themeSettings={siteThemeState.state}>
            <h1 id={`card-title`}>{name}</h1>
            {/* <h4>Star Count: {stargazerCount}</h4> */}
            <p id={`description`}>{description}</p>
            <CardFooter>
              <a id={`card-url`} href={url}>
                <GitHubLogoIcon src={GitHubIcon} alt="GitHub Logo Icon" />
              </a>
              {/* <p>{JSON.stringify(primaryLanguage, null, 2)}</p> */}
              <ProgrammingLanguage
                languageData={primaryLanguage}
                starCount={stargazerCount}
              />
            </CardFooter>
          </CardWrapper>
        </a>
      </DefaultWrapper>
    </>
  );
};

export default GithubCard;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 420px;
  height: 250px;
  padding: 1em;

  border: 1px solid #e0e0e0;
  border-radius: 5px;
  /* box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5); */
  /* box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px,
    rgb(0 0 0 / 12%) 0px 3px 1px -2px; */

  cursor: default;

  color: ${props =>
    props.themeSettings
      ? css`var(--background-dark)`
      : css`var(--background-light)`};

  :hover {
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  }

  #card-title {
    margin: 0 0 0.5em 0;
    font-size: 1vw;
  }

  #description {
    margin-bottom: auto;

    font-size: 0.6vw;
    text-align: left;

    /* border: 1px solid blue; */
  }

  #card-url {
    margin-right: auto;
  }
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid orange; */
`;

const GitHubLogoIcon = styled.img`
  width: 20px;
  height: 20px;
`;
