import axios from "axios";
import { CharacterInterface, CharacterTypes } from "./characters.types";

export const uploadCharacterRequest = () => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_REQUEST };
};

export const uploadCharacterSuccess = (character: CharacterInterface) => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_SUCCESS, payload: character };
};

export const uploadCharacterFailure = (error: any) => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_FAILURE, payload: error };
};

export const fetchCharactersRequest = () => {
  return { type: CharacterTypes.FETCH_CHARACTERS_REQUEST };
};

export const fetchCharactersSuccess = (characters: CharacterInterface[]) => {
  return { type: CharacterTypes.FETCH_CHARACTERS_SUCCESS, payload: characters };
};

export const fetchCharactersFailure = (error: any) => {
  return { type: CharacterTypes.FETCH_CHARACTERS_FAILURE, payload: error };
};

export const removeCharacterRequest = () => {
  return { type: CharacterTypes.REMOVE_CHARACTER_REQUEST };
};

export const removeCharacterSuccess = (id: string) => {
  return { type: CharacterTypes.REMOVE_CHARACTER_SUCCESS, payload: id };
};

export const removeCharacterFailure = (error: any) => {
  return { type: CharacterTypes.REMOVE_CHARACTER_FAILURE, payload: error };
};

export const uploadCharacter = (body: CharacterInterface) => {
  return (dispatch: any) => {
    dispatch(uploadCharacterRequest());
    axios
      .post("http://localhost:5000/api/character", body)
      .then((res: any) => {
        const character = res.data;
        dispatch(uploadCharacterSuccess(character));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(uploadCharacterFailure(errorMessage));
      });
  };
};

export const fetchCharacters = () => {
  return (dispatch: any) => {
    dispatch(fetchCharactersRequest());
    axios
      .get("http://localhost:5000/api/character")
      .then((res: any) => {
        const characters = res.data;
        dispatch(fetchCharactersSuccess(characters));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(fetchCharactersFailure(errorMessage));
      });
  };
};

export const removeCharacter = (id: number) => {
  return (dispatch: any) => {
    dispatch(removeCharacterRequest());
    axios
      .delete(`${process.env.REACT_APP_HOST}/character/${id}`)
      .then((res: any) => {
        const id = res.data.character;
        dispatch(removeCharacterSuccess(id));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(removeCharacterFailure(errorMessage));
      });
  };
};
