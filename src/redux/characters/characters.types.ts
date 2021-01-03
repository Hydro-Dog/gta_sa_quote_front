export interface CharacterInterface {
  id?: number;
  name: string;
  updated?: string;
  created?: string;
  image: string;
}

export enum CharacterTypes {
  UPLOAD_CHARACTER_REQUEST = "UPLOAD_CHARACTER_REQUEST",
  UPLOAD_CHARACTER_SUCCESS = "UPLOAD_CHARACTER_SUCCESS",
  UPLOAD_CHARACTER_FAILURE = "UPLOAD_CHARACTER_FAILURE",
}
