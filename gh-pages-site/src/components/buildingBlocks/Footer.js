import React from "react";
import styled from "styled-components";

const Footer = ({ props }) => {
  return (
    <>
      <FooterWrapper id="footer-wrapper">
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
  height: 200px;

  border: 2px solid #e7e7e7;
  border-radius: 5px;
`;
