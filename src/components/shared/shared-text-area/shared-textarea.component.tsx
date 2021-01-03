import { useState } from "react";
import { Theme } from "../../../shared/enums/themes.enum";
import styles from "./shared-textarea.module.scss";

interface SharedTextareaProps {
  theme?: Theme | undefined;
  value?: string;
  parentCb: any;
}

export const SharedTextarea = (props: SharedTextareaProps) => {
  const [text, setText] = useState("");

  const getComputedStyle = (theme: Theme | undefined) => {
    console.log("!theme: ", theme === Theme.dark || !theme ? "dark" : "light");
    return theme === Theme.dark || !theme ? "dark" : "light";
  };

  const changeHandler = (e: any) => {
    setText(e.target.value);
    props.parentCb(e.target.value);
  };
  return (
    <div className={styles["texarea-container"]}>
      <textarea
        className={`${styles[getComputedStyle(props.theme)]}`}
        value={props.value}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
