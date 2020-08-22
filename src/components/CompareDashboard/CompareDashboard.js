import React from "react";
import { Route, Switch } from "react-router-dom";

import Design from "./Design";
import Website from "./Website";

const compareDashboard = (props) => {
  return (
    <div
      className="compare__wrapper" >
      <Switch>
        <Route
          exact
          path="/design"
          component={() => <Design src={props.srcDesign} />}
        />
        <Route
          path="/website"
          component={() => <Website src={props.srcWebsite} />}
        />
      </Switch>
    </div>
  );
};

export default compareDashboard;
