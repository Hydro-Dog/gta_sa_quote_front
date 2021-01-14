import { useEffect, useState } from "react";
import { Theme } from "../../../shared/enums/themes.enum";
import styles from "./shared-select.module.scss";

interface SharedSelectProps {
  theme?: Theme;
  value?: string;
  options: { value: any; id: any }[];
  parentCb: any;
}

export const SharedSelect = (props: SharedSelectProps) => {
  useEffect(() => console.log("props: ", props), []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOtion, setSelectedOption] = useState(props.options[0]);

  const optionSelected = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    props.parentCb(option);
  };
  const getComputedStyle = (theme: Theme | undefined) => {
    return theme === Theme.dark || !theme ? "dark" : "light";
  };

  const dropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles[getComputedStyle(props.theme)]}`}>
      <div onClick={dropdownToggle}>{selectedOtion?.value}</div>
      <div>
        {isOpen ? (
          props.options.map((option: any) => (
            <div
              className={styles["option"]}
              onClick={(e) => optionSelected(option)}
              key={option.id}
            >
              {option.value}
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
