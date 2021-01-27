import React, { FC } from "react";
import { Link } from "gatsby";
// import { useMatch } from "@reach/router";
import { Route, Site } from "../../types";
import { HeaderStyles } from "./HeaderStyles";

interface Props {
  site: Site;
}

/**
 * Header
 * Site-wide navigation
 * Maps through routes from API (with exceptions)
 */
export const Header: FC<Props> = ({ site }) => {
  const ROUTE_EXCEPTIONS = ["home"];

  return (
    <HeaderStyles>
      <h1>Gatsby Spike</h1>
      <nav>
        {site?.routes?.map(
          (route, i) =>
            !ROUTE_EXCEPTIONS.includes(route.name) && (
              <Link
                activeClassName="active"
                to={`/${site.baseURL}/${route.name}`}
                key={i}
              >
                {route.name}
              </Link>
            )
        )}
      </nav>
    </HeaderStyles>
  );
};
