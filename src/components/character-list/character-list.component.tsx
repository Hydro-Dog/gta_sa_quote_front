import React, { useEffect, useState } from "react";
import styles from "./character-list.module.scss";
import { connect, useSelector } from "react-redux";
import {
  fetchCharacters,
  removeCharacter,
  uploadCharacter,
} from "../../redux/characters/characters.actions";
import {
  CharacterInterface,
  CharacterListStateInterface,
} from "../../redux/characters/characters.types";
import { SharedInput } from "../shared/input-field/shared-input.component";
import { SharedMenuButton } from "../shared/menu-button/shared-menu-button.component";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

interface CharacterListProps {
  uploadCharacter: any;
  fetchCharacters: any;
  removeCharacter: any;

  characterListState: CharacterListStateInterface;
}

const CharacterListComponent = ({
  uploadCharacter,
  fetchCharacters,
  removeCharacter,
  characterListState,
}: CharacterListProps) => {
  const [image, setFile] = useState<any>();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    console.log(
      "characterListState.characterList:",
      characterListState.characterList
    );
    fetchCharacters();
  }, []);

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
                <div
                  className={styles["character-container"]}
                  key={character.id}
                >
                  <div>{character.name}</div>
                  <div className={styles["image-container"]}>
                    <img
                      className={styles["character-image"]}
                      src={window.atob(character?.image)}
                    />
                  </div>
                  <div
                    onClick={() => removeCharacter(character.id)}
                    className={styles["character-remove"]}
                  >
                    <ClearRoundedIcon></ClearRoundedIcon>
                  </div>
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
    removeCharacter: (id: number) => dispatch(removeCharacter(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListComponent);
