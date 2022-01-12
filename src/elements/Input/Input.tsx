/** @jsxImportSource @emotion/react */

//types
import InterfaceInput from "src/types/elements/Input";

//assets
import InputStyled, { InputWrapper, InputError, InputLabel } from "./InputStyles";

function Input({ label, error, disabled, onChange, ...props }: InterfaceInput) {


  return (
    <InputWrapper>
      { label && <InputLabel>{ label }</InputLabel> }
      <InputStyled
        { ...props }
        onChange={e => !disabled && onChange && onChange(e)}
      />
      { error && <InputError>{ error }</InputError> }
    </InputWrapper>
  );
}

export default Input;
