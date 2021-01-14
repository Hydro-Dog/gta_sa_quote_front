import { CharacterInterface } from "../characters/characters.types";

export enum QuotesTypes {
  FETCH_QUOTE_REQUEST = "FETCH_QUOTE_REQUEST",
  FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS",
  FETCH_QUOTE_FAILURE = "FETCH_QUOTE_FAILURE",
  REMOVE_QUOTE_REQUEST = "REMOVE_QUOTE_REQUEST",
  REMOVE_QUOTE_SUCCESS = "REMOVE_QUOTE_SUCCESS",
  REMOVE_QUOTE_FAILURE = "REMOVE_QUOTE_FAILURE",
}

export interface QuoteStateInterface {
  error: string;
  isLoading: boolean;
  quote: QuoteInterface;
}

export interface QuoteInterface {
  id: number;
  text: string;
  updated: string;
  created: string;
  author: CharacterInterface;
}
