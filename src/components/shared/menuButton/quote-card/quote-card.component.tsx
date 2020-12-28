import styles from "./quote-card.module.scss";
import pic from "../../../../assets/images/bg3.jpg";
import React from "react";
import { QuoteAuthorComponent } from "../quote-author/quote-author.component";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../../../../redux/quotes/quote-actions";
import { QuoteStateInterface } from "../../../../redux/quotes/quotes.types";

export interface QuoteCardProps {
  quote: QuoteStateInterface;
  fetchQuote: any;
}

const QuoteCard = ({ quote, fetchQuote }: QuoteCardProps) => {
  useEffect(() => {
    fetchQuote();
  }, []);

  return quote.isLoading ? (
    <h3>Loading</h3>
  ) : (
    <div className={styles["quote-card-container"]}>
      <img className={styles["quote-image2"]} src={pic} />
      <div className={styles["quote-text"]}>{quote.quote?.text}</div>
      <div className={styles["quote-author"]}>
        <QuoteAuthorComponent
          author={quote.quote?.author}
        ></QuoteAuthorComponent>
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
