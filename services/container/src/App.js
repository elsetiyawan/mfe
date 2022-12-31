import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

console.log(mount);

export default () => {
  return (
    <>
      <h1>Hi there</h1>
      <MarketingApp />
    </>
  );
};
