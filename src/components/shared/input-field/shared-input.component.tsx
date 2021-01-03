import { Theme } from "../../../shared/enums/themes.enum";
import styles from "./shared-input.module.scss";

interface SharedInputProps {
  theme?: Theme | undefined;
  value?: string;
  parentCb: any;
}

export const SharedInput = (props: SharedInputProps) => {
  const getComputedStyle = (theme: Theme | undefined) => {
    return theme === Theme.dark || !theme ? "dark" : "light";
  };

  const changeHandler = (e: any) => {
    console.log("e: ", e.target.value);
    props.parentCb(e.target.value);
  };
  return (
    <div className={styles["input-container"]}>
      <input
        className={`${styles["input"]} ${
          styles[getComputedStyle(props.theme)]
        }`}
        type="text"
        value={props.value}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
};
