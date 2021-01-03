import React from "react";
import styles from "./admin.module.scss";
import { Switch, useRouteMatch, Link, Route } from "react-router-dom";
import CharacterListComponent from "../../components/character-list/character-list.component";
import { QuoteListComponent } from "../../components/quote-list/quote-list.component";

export const AdminModule = () => {
  let { path } = useRouteMatch();
  console.log("path: ", path);

  const nameChanged = (e: string) => {
    console.log("parent name e: ", e);
  };

  const picChanged = (e: string) => {
    console.log("parent pic e: ", e);
  };

  const authorChanged = (e: string) => {
    console.log("authorChanged: ", e);
  };
  return (
    <div className={styles["admin-contaier"]}>
      <div className={styles["navigaiton"]}>
        <div>
          <Link to={`${path}/quotelist`}>Цитаты</Link>
        </div>
        <div>
          <Link to={`${path}/characterlist`}>Персонажи</Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route
            path={`${path}/quotelist`}
            component={QuoteListComponent}
          ></Route>
          <Route
            path={`${path}/characterlist`}
            component={CharacterListComponent}
          ></Route>
        </Switch>
      </div>
      {/* <div>
        Name:
        <SharedInput theme={Theme.dark} parentCb={nameChanged}></SharedInput>
      </div>
      <div>
        Pic:
        <SharedInput theme={Theme.dark} parentCb={picChanged}></SharedInput>
      </div>
      <div>
        <SharedSelect
          theme={Theme.dark}
          parentCb={authorChanged}
          options={[1, 2, 3, 4, 5]}
        ></SharedSelect>
      </div> */}
    </div>
  );
};
