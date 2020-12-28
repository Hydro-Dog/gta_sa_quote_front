import React from "react";
import styles from "./admin.module.scss";
import { SharedInput } from "../../components/shared/menuButton/input-field/shared-input.component";
import { Theme } from "../../shared/enums/themes.enum";
import { SharedSelect } from "../../components/shared/menuButton/select/shared-select.component";

export const AdminModule = () => {
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
      <div>
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
      </div>
    </div>
  );
};
