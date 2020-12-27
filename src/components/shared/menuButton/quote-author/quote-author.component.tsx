import styles from "./quote-author.module.scss";
import pic from "../../../../assets/images/author__big-smoke.jpg";

export interface QuoteAuthorProps {}

export const QuoteAuthorComponent = (props: QuoteAuthorProps) => {
  return (
    <div className={styles["quote-author-container"]}>
      <div className={styles["quote-author-container__name"]}>Большой Дым</div>
      <div className={styles["quote-author-container__pic"]}>
        <img src={pic} />
      </div>
    </div>
  );
};
