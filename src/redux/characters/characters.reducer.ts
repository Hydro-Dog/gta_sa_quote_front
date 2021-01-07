import { CharacterInterface, CharacterTypes } from "./characters.types";

interface initialStateInterface {
  isLodaing: boolean;
  characterList: any[];
  error: string;
}
const initialState: initialStateInterface = {
  isLodaing: false,
  characterList: [],
  error: "",
};

export const characterListReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case CharacterTypes.UPLOAD_CHARACTER_REQUEST: {
      return { ...state, isLodaing: true };
    }
    case CharacterTypes.UPLOAD_CHARACTER_SUCCESS: {
      return {
        ...state,
        characterList: state.characterList.concat([action.payload]),
        isLodaing: false,
      };
    }
    case CharacterTypes.UPLOAD_CHARACTER_FAILURE: {
      return { ...state, error: action.payload };
    }

    case CharacterTypes.FETCH_CHARACTERS_REQUEST: {
      return { ...state, isLodaing: true };
    }
    case CharacterTypes.FETCH_CHARACTERS_SUCCESS: {
      return { ...state, characterList: [...action.payload], isLodaing: false };
    }
    case CharacterTypes.FETCH_CHARACTERS_FAILURE: {
      return { ...state, error: action.payload };
    }

    case CharacterTypes.REMOVE_CHARACTER_REQUEST: {
      return { ...state, isLodaing: true };
    }
    case CharacterTypes.REMOVE_CHARACTER_SUCCESS: {
      return {
        ...state,
        characterList: state.characterList.filter(
          (character: CharacterInterface) =>
            character.id?.toString() !== action.payload
        ),
        isLodaing: false,
      };
    }
    case CharacterTypes.REMOVE_CHARACTER_FAILURE: {
      return { ...state, error: action.payload };
    }

    default:
      return { ...state };
  }
};
