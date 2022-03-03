import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "../Forms/ErrorMessage";

function FormImagePicker(props) {
  return (
    <>
      <ImageInputList />
      <ErrorMessage />
    </>
  );
}

export default FormImagePicker;
