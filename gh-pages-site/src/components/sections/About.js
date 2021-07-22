import React from "react";
import styled, { css } from "styled-components";
import "../../css/styles.css";

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
