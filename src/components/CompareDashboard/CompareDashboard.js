import React from "react";
import { Route, Switch } from "react-router-dom";

import Design from "./Design";
import Website from "./Website";

const compareDashboard = (props) => {
  return (
    <div
      className="compare"
      style={{
        width: "90vw",
        height: "calc(90vh-137px)",
        border: "1px solid #fff",
        background: "pink",
        borderRadius: "5px",
        boxShadow: "0 6px 50px 0 #cfd4d4",
      }}
    >
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
