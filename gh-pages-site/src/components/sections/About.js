import React from "react";
import styled, { css } from "styled-components";

import { DefaultWrapper } from "../common/commonStyles";

const About = ({ siteThemeState, ...props }) => {
  const ContentStyles = {
    boxShadow: `2px 2px 5px ${
      siteThemeState?.state
        ? css`rgba(0,0,0,0.15)`
        : css`rgba(255,255,255,0.15)`
    }`,
    borderRadius: `5px`,
    flexGrow: `1`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  };

  return (
    <>
      {/* <Wrapper className={`debug-border`}> */}
      <Wrapper>
        <DefaultWrapper style={ContentStyles}>
          <img src="" alt="" width="100px" height="auto" />
        </DefaultWrapper>
        <DefaultWrapper style={ContentStyles}>Content</DefaultWrapper>
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
