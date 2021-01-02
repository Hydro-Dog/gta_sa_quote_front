import React from "react";
import { SharedMenuButton } from "../../components/shared/menu-button/shared-menu-button.component";
import QuoteCard from "../../components/shared/quote-card/quote-card.component";
import styles from "./quote.module.scss";

export const QuoteModule = () => {
  return (
    <div className={styles["quote-contaier"]}>
      <div className={styles["content"]}>
        <div className={styles["quote-card"]}>
          <QuoteCard></QuoteCard>
        </div>

        <SharedMenuButton text="Сохранить"></SharedMenuButton>
      </div>
    </div>
  );
};
