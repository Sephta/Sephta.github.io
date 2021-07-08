import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/seo";
import { HomeWrapper, LandingWrapper } from "../components/wrappers";

const IndexPage = ({ props }) => {
  const [themeState, setThemeState] = React.useState(true);

  // This useEffector changes css colorTheme class attached to the body html element
  React.useEffect(() => {
    let oldBodyTheme = document.body.classList[0];
    let newBodyTheme = themeState
      ? "light-theme-container"
      : "dark-theme-container";
    document.body.classList.add(newBodyTheme);
    document.body.classList.remove(oldBodyTheme);
  }, [themeState]);

  return (
    <LandingWrapper
      siteThemeState={{ state: themeState, setState: setThemeState }}
    >
      <SEO title="Home" />
      <HomeWrapper />
    </LandingWrapper>
  );
};
export default IndexPage;
