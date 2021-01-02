import styles from "./quote-author.module.scss";
import pic from "../../../assets/images/author__big-smoke.jpg";
import { QuoteAuthorInterface } from "../../../redux/quoteAuthors/quotes-authors.types";

export interface QuoteAuthorProps {
  author: QuoteAuthorInterface;
}

export const QuoteAuthorComponent = (props: QuoteAuthorProps) => {
  return (
    <div className={styles["quote-author-container"]}>
      <div className={styles["quote-author-container__name"]}>
        {props.author?.name}
      </div>
      <div className={styles["quote-author-container__pic"]}>
        <img src={pic} />
      </div>
    </div>
  );
};
