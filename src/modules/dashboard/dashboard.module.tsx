import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { MenuButton } from "../../components/shared/menuButton/menu-button/menu-button.component";
import { QuoteModule } from "../quote/quote.module";
import styles from "./dashboard.module.scss";

export const DashboardModule = ({ ...props }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className={styles["dashboard"]}>
      <div className={styles["leftbar"]}>
        <div>Цитаты</div>
      </div>
      <div className={styles["dashboard__main"]}>
        <div className={styles["dashboard__main-bg"]}></div>
        <div className={styles["leftbar"]}></div>
        <div className={styles["dashboard__main-content"]}>
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}quote`} component={QuoteModule}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
