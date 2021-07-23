import React from "react";
import styled, { css } from "styled-components";
import "../../css/styles.css";
import ProfileImage from "../../images/Sephta_Profile-export.png";

import { DefaultWrapper } from "../common/commonStyles";

const About = ({ siteThemeState, ...props }) => {
  const ContentStyles = {
    borderRadius: `5px`,
    // boxShadow: `1px 1px 3px rgba(0,0,0,0.5)`,
    flexGrow: `1`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  };

  return (
    <>
      {/* <Wrapper className={`debug-border`}> */}
      <Wrapper className={`debug-border`}>
        <DefaultWrapper
          // className={`styles-dark-box-shadow`}
          style={ContentStyles}
        >
          <LeftContentWrapper>
            <h1>Hi there! My name is</h1>
            <h2>Seth Tal</h2>
            <h3>
              Freelance Full Stack Engineer | Actively seeking Entry-Level
              Software Engineer positions
            </h3>
          </LeftContentWrapper>
        </DefaultWrapper>
        <DefaultWrapper style={ContentStyles}>
          <RightContentWrapper>Content</RightContentWrapper>
        </DefaultWrapper>
      </Wrapper>
    </>
  );
};

export default About;

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  width: auto;
  min-height: 800px;
  padding: 1em;
`;

const LeftContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;

  text-align: left;

  width: 69%;
  height: 800px;

  h1 {
    @media (max-width: 480px) {
      font-size: 0.25em;
    }
    @media (max-width: 768px) {
      font-size: 0.5em;
    }
    @media (max-width: 1024px) {
      font-size: 0.75em;
    }
    @media (max-width: 1200px) {
      font-size: 1em;
    }

    font-size: 1em;
  }

  h2 {
    font-size: 2.69em;
  }

  h3 {
    font-size: 1.125em;
  }
`;
const RightContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: auto;
  height: 800px;
`;

const Img = styled.img`
  width: 10em;
  height: auto;

  /* border: 2px solid #ededed; */
  border-radius: 50%;
  /* box-shadow: 0px 50px 50px rgba(18, 18, 18, 0.255); */

  /* transform: translateY(-100px); */
`;
