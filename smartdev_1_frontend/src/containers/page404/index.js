import React from "react";
import { Link } from "react-router-dom";
import { Page404Container } from "./style";

function Page404() {
  return (
    <Page404Container>
      <div>
        <h1>404</h1>
        <h3>page not found</h3>
        <p>please try ones of the following pages</p>
        <Link to="/">Home Page</Link>
      </div>
    </Page404Container>
  );
}

export default Page404;
