import React from "react";
import { BasicTemplate } from "../components/BasicTemplate";
import { Header } from "../components/Header";

const Basic = ({ pageContext }) => {
  return (
    <>
      <Header site={pageContext.org} />
      <BasicTemplate
        site={pageContext.org}
        currentRoute={pageContext.currentRoute || "home"}
      />
    </>
  );
};

export default Basic;
