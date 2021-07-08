import React from "react";
import styled from "styled-components";

const HomeWrapper = () => {
  return (
    <>
      <Wrapper id={"home-wrapper"}>
        <h1
          className={"text-center text-5xl font-mono font-bold text-grey-900"}
        >
          HOME PAGE
        </h1>
      </Wrapper>
    </>
  );
};

export default HomeWrapper;

const Wrapper = styled.div`
  width: 100%;
  /* min-height: calc(100vh - 300px); */
  border: 1px solid blue;
`;
