import React from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { DashboardModule } from "./modules/dashboard/dashboard.module";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={DashboardModule} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
