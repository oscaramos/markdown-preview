import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";

import Page from "components/Page";

function Content() {
  return (
    <Page>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path || "#"} />
        ))}
      </Switch>
    </Page>
  );
}

export default Content;
