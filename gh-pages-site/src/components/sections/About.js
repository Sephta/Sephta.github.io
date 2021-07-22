import React from "react";
import styled, { css } from "styled-components";
import "../../css/styles.css";
import ProfileImage from "../../images/Sephta_Profile-export.png";

import { DefaultWrapper } from "../common/commonStyles";

const About = ({ siteThemeState, ...props }) => {
  const ContentStyles = {
    borderRadius: `5px`,
    boxShadow: `1px 1px 3px rgba(0,0,0,0.5)`,
    flexGrow: `1`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  };

  return (
    <>
      {/* <Wrapper className={`debug-border`}> */}
      <Wrapper>
        <DefaultWrapper
          // className={`styles-dark-box-shadow`}
          style={ContentStyles}
        >
          <LeftContentWrapper>
            <Img src={ProfileImage} alt="" />
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  padding: 1em;
  min-height: 100px;
`;

const LeftContentWrapper = styled.div``;
const RightContentWrapper = styled.div``;

const Img = styled.img`
  width: 10em;
  height: auto;

  border-radius: 50%;
  box-shadow: 1px 1px 10px #121212;
`;
