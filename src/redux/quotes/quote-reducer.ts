import { QuoteInterface, QuotesTypes } from "./quotes.types";

export interface initialQuoteStateInterface {
  isLodaing: boolean;
  quote: QuoteInterface;
  error: string;
}
const initialQuoteState = {
  isLodaing: false,
  quote: {},
  error: "",
};

const reducer = (
  state = initialQuoteState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case QuotesTypes.FETCH_QUOTE_REQUEST: {
      return { ...state, isLoding: true };
    }
    case QuotesTypes.FETCH_QUOTE_SUCCESS: {
      return { quote: action.payload, isLoding: false, error: "" };
    }
    case QuotesTypes.FETCH_QUOTE_FAILURE: {
      return { quote: {}, isLoding: false, error: action.payload };
    }
    default:
      return { ...state };
  }
};

export default reducer;
