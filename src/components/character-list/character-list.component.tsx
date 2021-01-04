import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchCharacters,
  uploadCharacter,
} from "../../redux/characters/characters.actions";
import {
  CharacterInterface,
  CharacterListStateInterface,
} from "../../redux/characters/characters.types";
import { SharedInput } from "../shared/input-field/shared-input.component";
import { SharedMenuButton } from "../shared/menu-button/shared-menu-button.component";
import CryptoJS from "crypto";

interface CharacterListProps {
  uploadCharacter: any;
  fetchCharacters: any;

  characterListState: CharacterListStateInterface;
}

const CharacterListComponent = ({
  uploadCharacter,
  fetchCharacters,
  characterListState,
}: CharacterListProps) => {
  const [image, setFile] = useState<any>();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetchCharacters();
    console.log("characterListState: ", characterListState);
  }, [characterListState.isLoading, image]);

  const handleImageChange = (e: any) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setFile(reader.result);
    };
  };

  const nameChanged = (text: string) => {
    setName(text);
  };

  const uploadClicked = () => {
    if (name && image) {
      console.log(window.btoa(image));
      uploadCharacter({ name, image: window.btoa(image) });
    } else {
      console.log("Fill all the fields");
    }
  };

  return (
    <div>
      <SharedInput parentCb={nameChanged}></SharedInput>
      <input
        className="fileInput"
        type="file"
        onChange={(e) => handleImageChange(e)}
      />

      <img src={image} alt="" />
      <SharedMenuButton
        text="Добавить"
        parentCb={uploadClicked}
      ></SharedMenuButton>
      <div id="list">
        list
        {characterListState.isLoading ? (
          <h3>Loading</h3>
        ) : (
          characterListState.characterList.map(
            (character: CharacterInterface, idx) => {
              return (
                <div key={character.id}>
                  <div>{character.name}</div>
                  <img src={window.atob(character.image)} />
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    characterListState: state.characterList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    uploadCharacter: (body: CharacterInterface) =>
      dispatch(uploadCharacter(body)),
    fetchCharacters: () => dispatch(fetchCharacters()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListComponent);
