import React from "react";
import { MenuButton } from "../../components/shared/menuButton/menu-button/menu-button.component";
import { QuoteCard } from "../../components/shared/menuButton/quote-card/quote-card.component";
import styles from "./quote.module.scss";

export const QuoteModule = () => {
  return (
    <div className={styles["quote-contaier"]}>
      <div>
        <QuoteCard></QuoteCard>

        <MenuButton text="Скачать"></MenuButton>
      </div>
    </div>
  );
};
