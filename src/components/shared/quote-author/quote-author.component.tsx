import styles from "./quote-author.module.scss";
import pic from "../../../assets/images/author__big-smoke.jpg";
import { CharacterInterface } from "../../../redux/characters/characters.types";

export interface QuoteAuthorProps {
  author: CharacterInterface;
}

export const QuoteAuthorComponent = (props: QuoteAuthorProps) => {
  return (
    <div className={styles["quote-author-container"]}>
      <div className={styles["quote-author-container__name"]}>
        {props.author?.name}
      </div>
      <div className={styles["quote-author-container__pic"]}>
        <img
          className={styles["character-image"]}
          src={props?.author && window.atob(props?.author?.image)}
        />
      </div>
    </div>
  );
};
