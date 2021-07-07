import React from "react";
import styled from "styled-components";

const Footer = ({ props }) => {
  return (
    <>
      <FooterWrapper
        id="footer-wrapper"
        className={"flex items-center border-2 border-solid border-grey-900"}
      >
        <h1>FOOTER</h1>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  border: 1px solid orange;
`;
