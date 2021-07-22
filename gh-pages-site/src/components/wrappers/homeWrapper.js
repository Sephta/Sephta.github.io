import React from "react";
import styled from "styled-components";
import { About, Projects } from "../sections";

const HomeWrapper = ({ siteThemeState, ...props }) => {
  return (
    <>
      <Wrapper id={"home-wrapper"}>
        <About siteThemeState={siteThemeState} />
        {/* <div style={{ height: `100vh` }}></div> */}
        <Projects id={`#projects`} siteThemeState={siteThemeState} />
      </Wrapper>
    </>
  );
};

export default HomeWrapper;

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  /* min-height: calc(100vh - 300px); */
`;
