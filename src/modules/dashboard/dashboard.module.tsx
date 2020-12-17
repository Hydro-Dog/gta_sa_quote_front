import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { MenuButton } from "../../components/menuButton/menuButton.component";
import { QuoteModule } from "../quote/quote.module";
import styles from "./dashboard.module.scss";

export const DashboardModule = ({ ...props }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className={styles.dashboardContainer}>
      <div style={{ width: "20%", background: "red" }}>
        <div>Цитаты</div>
      </div>
      <div style={{ width: "80%", background: "black", color: "white" }}>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}hello`}>
            <h3>aaaaaa</h3>
            <MenuButton text="Generate"></MenuButton>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
