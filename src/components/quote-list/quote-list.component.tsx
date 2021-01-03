import React from "react";
import { SharedInput } from "../shared/input-field/shared-input.component";
import { SharedSelect } from "../shared/select/shared-select.component";
import { SharedTextarea } from "../shared/shared-text-area/shared-textarea.component";

export const QuoteListComponent = () => {
  const quoteTextChanged = (text: string) => {
    console.log("tex: ", text);
  };

  const characterSelected = (text: string) => {
    console.log("tex: ", text);
  };
  return (
    <div>
      <SharedTextarea parentCb={quoteTextChanged}></SharedTextarea>
      <SharedSelect
        options={[1, 2, 3]}
        parentCb={characterSelected}
      ></SharedSelect>
    </div>
  );
};
