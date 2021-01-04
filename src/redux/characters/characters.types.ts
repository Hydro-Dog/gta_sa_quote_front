export interface CharacterInterface {
  id?: number;
  name: string;
  updated?: string;
  created?: string;
  image: string;
}

export interface CharacterListStateInterface {
  error: string;
  isLoading: boolean;
  characterList: CharacterInterface[];
}

export enum CharacterTypes {
  UPLOAD_CHARACTER_REQUEST = "UPLOAD_CHARACTER_REQUEST",
  UPLOAD_CHARACTER_SUCCESS = "UPLOAD_CHARACTER_SUCCESS",
  UPLOAD_CHARACTER_FAILURE = "UPLOAD_CHARACTER_FAILURE",
  FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST",
  FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
  FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE",
}
