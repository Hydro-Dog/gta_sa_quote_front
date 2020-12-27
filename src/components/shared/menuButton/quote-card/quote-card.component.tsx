import styles from "./quote-card.module.scss";
import pic from "../../../../assets/images/bg3.jpg";
import React from "react";
import { QuoteAuthorComponent } from "../quote-author/quote-author.component";

export interface QuoteCardProps {}

export const QuoteCard = (props: QuoteCardProps) => {
  return (
    <div className={styles["quote-card-container"]}>
      <img className={styles["quote-image2"]} src={pic} />
      {/* <div className={styles["quote-image"]}></div> */}
      <div className={styles["quote-text"]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
      <div className={styles["quote-author"]}>
        <QuoteAuthorComponent></QuoteAuthorComponent>
      </div>
    </div>
  );
};
