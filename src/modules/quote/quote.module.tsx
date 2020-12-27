import React from "react";
import { MenuButton } from "../../components/shared/menuButton/menu-button/menu-button.component";
import QuoteCard from "../../components/shared/menuButton/quote-card/quote-card.component";
import styles from "./quote.module.scss";

export const QuoteModule = () => {
  return (
    <div className={styles["quote-contaier"]}>
      <div className={styles["content"]}>
        <div className={styles["quote-card"]}>
          <QuoteCard></QuoteCard>
        </div>

        <MenuButton text="Сохранить"></MenuButton>
      </div>
    </div>
  );
};
