"use client";
import React from "react";
import FormBooleanInput from "./FormBooleanInput";
import { FormInputProps } from "./FormTextInput";

const FormRadioInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  function FormRadioInput({ className = "", ...props }, ref) {
    return (
      <FormBooleanInput
        {...props}
        ref={ref}
        type="radio"
        className={className + " w-radio-input"}
      />
    );
  }
);

export default FormRadioInput;
