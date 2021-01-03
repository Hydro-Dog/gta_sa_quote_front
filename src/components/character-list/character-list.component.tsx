import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { uploadCharacter } from "../../redux/characters/characters.actions";
import { CharacterInterface } from "../../redux/characters/characters.types";
import { SharedInput } from "../shared/input-field/shared-input.component";
import { SharedMenuButton } from "../shared/menu-button/shared-menu-button.component";
import CryptoJS from "crypto";

interface CharacterListProps {
  uploadCharacter: any;
}

const CharacterListComponent = ({ uploadCharacter }: CharacterListProps) => {
  const [image, setFile] = useState<any>();
  const [name, setName] = useState<string>("");

  useEffect(() => {}, [image]);

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
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    characterList: state.characterList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    uploadCharacter: (body: CharacterInterface) =>
      dispatch(uploadCharacter(body)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListComponent);
