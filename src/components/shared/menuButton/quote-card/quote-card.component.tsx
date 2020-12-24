import styles from "./quote-card.module.scss";
import pic from "../../../../assets/images/bg3.jpg";

export interface QuoteCardProps {}

export const QuoteCard = (props: QuoteCardProps) => {
  return (
    <div className={styles["quote-card-container"]}>
      <img className={styles["quote-card-container__image"]} src={pic} />
      <div>props.quote</div>
    </div>
  );
};
