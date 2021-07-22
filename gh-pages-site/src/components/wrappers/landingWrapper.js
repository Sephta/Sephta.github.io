import React from "react";
import styled from "styled-components";

import { Header, Footer } from "../buildingBlocks";

const LandingWrapper = ({ children, siteThemeState, ...props }) => {
  return (
    <Wrapper
      id={"landing-wrapper"}
      className={
        siteThemeState.state ? "light-theme-container" : "dark-theme-container"
      }
    >
      {/* <Header useTailwind /> */}
      <Header siteThemeState={siteThemeState} />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default LandingWrapper;

const Wrapper = styled.div`
  scroll-behavior: smooth;
`;
