import React from "react";
import styled, { css } from "styled-components";
import { DefaultWrapper } from "./commonStyles";

const GithubCard = ({
  githubId,
  name,
  description,
  url,
  homepageUrl,
  stargazerCount,
  primaryLanguage,
}) => {
  return (
    <>
      <DefaultWrapper>
        <CardWrapper>
          <h1>{name}</h1>
          <a href={url}>*</a>
          <h4>Star Count: {stargazerCount}</h4>
          <h4 id={`description`}>{description}</h4>
          <p>{JSON.stringify(primaryLanguage, null, 2)}</p>
        </CardWrapper>
      </DefaultWrapper>
    </>
  );
};

export default GithubCard;

const CardWrapper = styled.div`
  width: 420px;
  min-height: 250px;
  padding: 1em;

  border-radius: 5px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);

  #description {
    text-align: center;
  }
`;
