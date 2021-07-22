import React from "react";
import styled, { css } from "styled-components";
import StarIcon from "../../images/star.svg";

const ProgrammingLanguage = ({ languageData, starCount }) => {
  return (
    <>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <StarImg src={StarIcon} alt="Star Icon" />
        <h4>{starCount}</h4>
      </div>

      <div
        style={{ display: `flex`, flexDirection: `row`, alignItems: `center` }}
      >
        <div
          style={{
            width: `12px`,
            height: `12px`,
            margin: `0 0 0 1em`,
            borderRadius: `50%`,
            backgroundColor: `${languageData.color}`,
          }}
        />
        <h4
          style={{
            margin: `0 0 0 0.125em`,
            padding: `0.25em`,
            textShadow: `1px 1px 3px rgba(0,0,0,0.25)`,
          }}
        >
          {languageData.name}
        </h4>
      </div>
    </>
  );
};

export default ProgrammingLanguage;

const StarImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 0.5em 0 0;
`;
