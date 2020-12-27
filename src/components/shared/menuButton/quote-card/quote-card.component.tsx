import styles from "./quote-card.module.scss";
import pic from "../../../../assets/images/bg3.jpg";
import React from "react";
import { QuoteAuthorComponent } from "../quote-author/quote-author.component";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../../../../redux/quotes/quote-actions";

export interface QuoteCardProps {}

const QuoteCard = ({ fetchQuote }: any) => {
  useEffect(() => {
    fetchQuote();
  }, []);

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

const mapStateToProps = (state: any) => {
  return {
    quote: state.quote,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchQuote: () => dispatch(fetchQuote()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteCard);
