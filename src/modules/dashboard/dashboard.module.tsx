import { Switch, Route, useRouteMatch } from "react-router-dom";
import { QuoteModule } from "../quote/quote.module";
import styles from "./dashboard.module.scss";

export const DashboardModule = ({ ...props }) => {
  let { path, url } = useRouteMatch();
  console.log("path: ", path);
  console.log("url: ", url);
  return (
    <div className={styles.dashboardContainer}>
      <div style={{ width: "20%", background: "red" }}>
        <div>Цитаты</div>
      </div>
      <div style={{ width: "80%", background: "blue" }}>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}hello`}>
            <h3>aaaaaa</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
