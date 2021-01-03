import axios from "axios";
import { CharacterInterface, CharacterTypes } from "./characters.types";

export const uploadCharacterRequest = () => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_REQUEST };
};

export const uploadCharacterSuccess = (quote: any) => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_SUCCESS, payload: quote };
};

export const uploadCharacterFailure = (error: any) => {
  return { type: CharacterTypes.UPLOAD_CHARACTER_FAILURE, payload: error };
};

export const uploadCharacter = (body: CharacterInterface) => {
  return (dispatch: any) => {
    console.log("body: ", body);
    dispatch(uploadCharacterRequest());
    axios
      .post("http://localhost:5000/api/character", body)
      .then((res: any) => {
        const quote = res.data;
        console.log("res: ", res);
        console.log("res.data: ", res.data);
        dispatch(uploadCharacterSuccess(quote));
      })
      .catch((err: any) => {
        const errorMessage = err.message;
        dispatch(uploadCharacterFailure(errorMessage));
      });
  };
};
