import axios from "axios";
import { QuotesTypes } from "./quotes.types";

export interface QuoteInterface {}

export const fetchQuoteRequest = () => {
  return { type: QuotesTypes.FETCH_QUOTE_REQUEST };
};

export const fetchQuoteSuccess = (quote: any) => {
  return { type: QuotesTypes.FETCH_QUOTE_SUCCESS, payload: quote };
};

export const fetchQuoteFailure = (error: any) => {
  return { type: QuotesTypes.FETCH_QUOTE_FAILURE, payload: error };
};

export const fetchQuote = () => {
  return (dispatch: any) => {
    console.log("fetchQuote:");
    dispatch(fetchQuoteRequest());
    axios
      .get("http://localhost:5000/api/quote/random")
      .then((res: any) => {
        console.log("res: ", res);
        const quote = res.data;
        dispatch(fetchQuoteSuccess(quote));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(fetchQuoteFailure(errorMessage));
      });
  };
};
