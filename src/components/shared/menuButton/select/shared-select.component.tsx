import { useState } from "react";
import { Theme } from "../../../../shared/enums/themes.enum";
import styles from "./shared-select.module.scss";

interface SharedSelectProps {
  theme: Theme;
  value?: string;
  options: any;
  parentCb: any;
}

export const SharedSelect = (props: SharedSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOtion, setSelectedOption] = useState(props.options[0]);

  const optionSelected = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    props.parentCb(option);
  };
  const getComputedStyle = (theme: Theme) => {
    return theme === Theme.dark ? "dark" : "light";
  };

  const dropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["input-container"]}>
      <div
        onClick={dropdownToggle}
        className={`${styles[getComputedStyle(props.theme)]}`}
      >
        {selectedOtion}
      </div>
      <div>
        {isOpen ? (
          props.options.map((option: any) => (
            <div onClick={(e) => optionSelected(option)} key={option}>
              {option}
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
