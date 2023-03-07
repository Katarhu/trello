import { DefaultInputAttributes } from "@types";
import { ChangeEventHandler } from "react";

interface IDefaultTextFieldProps {
  onChange: ChangeEventHandler;
  value: string;
  touched?: boolean;
  errors?: string[] | null;
}

export type InputVariants = "outlined" | "filled" | undefined;

export interface InputStyled
  extends IDefaultTextFieldProps,
    Omit<DefaultInputAttributes, "onChange" | "value"> {
  variant: InputVariants;
  labelText?: string;
  placeholder?: undefined;
}

export interface InputPlain
  extends IDefaultTextFieldProps,
    Omit<DefaultInputAttributes, "onChange" | "value"> {
  variant?: undefined;
  labelText?: undefined;
  placeholder?: string;
}

export type TextFieldProps = InputStyled | InputPlain;
