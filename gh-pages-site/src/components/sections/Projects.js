import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import { DefaultWrapper } from "../common/commonStyles";
import GithubCard from "../common/githubCard";

const Projects = ({ siteThemeState, ...props }) => {
  const data = useStaticQuery(graphql`
    query GitHubQuery {
      github {
        viewer {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on GitHub_Repository {
                id
                name
                url
                description
                homepageUrl
                stargazerCount
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `);

  const githubCards = data.github.viewer.pinnedItems.nodes.map(node => (
    <GithubCard
      githubId={node.id}
      name={node.name}
      url={node.url}
      description={node.description}
      homepageUrl={node.homepageUrl}
      stargazerCount={node.stargazerCount}
      primaryLanguage={node.primaryLanguage}
    />
  ));

  console.log("githubCards: ", githubCards);

  return (
    <>
      <DefaultWrapper className={`debug-border`}>
        <CardContainer>{githubCards}</CardContainer>
      </DefaultWrapper>
    </>
  );
};

export default Projects;

const CardContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
`;
