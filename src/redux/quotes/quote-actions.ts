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

export const uploadQuoteRequest = () => {
  return { type: QuotesTypes.REMOVE_QUOTE_REQUEST };
};

export const uploadQuoteSuccess = (quote: QuoteInterface) => {
  return { type: QuotesTypes.REMOVE_QUOTE_SUCCESS, payload: quote };
};

export const uploadQuoteFailure = (err: any) => {
  return { type: QuotesTypes.REMOVE_QUOTE_FAILURE, payload: err };
};

export const uploadQuote = (quote: QuoteInterface) => {
  return (dispatch: any) => {
    dispatch(uploadQuoteRequest());
    axios
      .post(`http://localhost:5000/api/quote`)
      .then((res: any) => {
        const quote = res.data;
        dispatch(uploadQuoteSuccess(quote));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(uploadQuoteFailure(errorMessage));
      });
  };
};

export const removeQuoteRequest = () => {
  return { type: QuotesTypes.REMOVE_QUOTE_REQUEST };
};

export const removeQuoteSuccess = (id: number) => {
  return { type: QuotesTypes.REMOVE_QUOTE_SUCCESS, payload: id };
};

export const removeQuoteFailure = (err: any) => {
  return { type: QuotesTypes.REMOVE_QUOTE_FAILURE, payload: err };
};

export const removeQuote = (id: number) => {
  return (dispatch: any) => {
    dispatch(removeQuoteRequest());
    axios
      .delete(`http://localhost:5000/api/quote/${id}`)
      .then((res: any) => {
        const quote = res.data;
        dispatch(removeQuoteSuccess(quote));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(removeQuoteFailure(errorMessage));
      });
  };
};
