import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../../redux/characters/characters.actions";
import { initialCharacterListStateInterface } from "../../redux/characters/characters.reducer";
import { CharacterInterface } from "../../redux/characters/characters.types";
import {
  fetchQuote,
  removeQuote,
  uploadQuote,
} from "../../redux/quotes/quote-actions";
import { initialQuoteStateInterface } from "../../redux/quotes/quote-reducer";
import {
  QuoteInterface,
  QuoteStateInterface,
} from "../../redux/quotes/quotes.types";
import { SharedInput } from "../shared/input-field/shared-input.component";
import { SharedSelect } from "../shared/select/shared-select.component";
import { SharedTextarea } from "../shared/shared-text-area/shared-textarea.component";

interface QuoteListProps {
  fetchQuote: any;
  uploadQuote: any;
  removeQuote: any;
  fetchCharacters: any;

  initialQuoteState: initialQuoteStateInterface;
  initialCharcterListState: initialCharacterListStateInterface;
}

const QuoteListComponent = ({
  fetchQuote,
  uploadQuote,
  removeQuote,
  fetchCharacters,
  initialQuoteState,
  initialCharcterListState,
}: QuoteListProps) => {
  useEffect(() => {
    fetchCharacters();
  }, []);

  const quoteTextChanged = (text: string) => {
    console.log("tex: ", text);
  };

  const characterSelected = (text: string) => {
    console.log("tex: ", text);
  };
  return (
    <div>
      <div id="list">
        {/* {initialCharcterListState?.characterList.map(
          (character: CharacterInterface, idx) => {
            return (
              <div key={character.id}>
                <div>{character.name}</div>
                <div>
                  <img src={window.atob(character?.image)} />
                </div>
                <div></div>
              </div>
            );
          }
        )} */}
      </div>
      <SharedTextarea parentCb={quoteTextChanged}></SharedTextarea>
      {initialCharcterListState.characterList.length ? (
        <SharedSelect
          options={initialCharcterListState.characterList.map((character) => ({
            value: character.name,
            id: character.id,
          }))}
          parentCb={characterSelected}
        ></SharedSelect>
      ) : (
        <div></div>
      )}
      <div id="quote-list"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    initialQuoteState: state.initialQuoteState,
    initialCharcterListState: state.characterList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  };

  // return {
  //   fetchQuote: () => dispatch(fetchQuote()),
  //   uploadQuote: (body: QuoteInterface) => dispatch(uploadQuote(body)),
  //   removeQuote: (id: number) => dispatch(removeQuote(id)),
  //   fetchCharacters: () => dispatch(fetchCharacters()),
  // };
};

//ВАЖНО: если используем в компоненте redux, то экспортируем не сам компонента, а вот этот коннект
export default connect(mapStateToProps, mapDispatchToProps)(QuoteListComponent);
