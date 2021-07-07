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
        <div>
          Sun and Moon Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
          >
            Good Ware
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  border: 1px solid orange;
`;
