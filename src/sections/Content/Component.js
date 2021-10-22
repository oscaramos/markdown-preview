import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";

import Page from "components/Page";

function Content() {
  return (
    <Page>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path || "#"} />
          ))}
        </Switch>
      </Suspense>
    </Page>
  );
}

export default Content;
