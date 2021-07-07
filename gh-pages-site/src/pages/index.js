import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/seo";
import { HomeWrapper, LandingWrapper } from "../components/wrappers";

const IndexPage = ({ props }) => {
  const [themeState, setThemeState] = React.useState(true);

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
