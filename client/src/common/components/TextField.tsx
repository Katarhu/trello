import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler;
  value: string | number;
  id?: string;
}

export const TextField = ({ onChange, value, ...props }: TextFieldProps) => {
  return <AppTextField onChange={onChange} value={value} {...props} />;
};

const AppTextField = styled.input<TextFieldProps>`
  font-size: 0.8em;
  width: 100%;
  padding: 0.25em 0.5em;
  background: transparent;
`;
