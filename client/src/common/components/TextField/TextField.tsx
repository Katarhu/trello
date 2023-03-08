import { memo, useId, useState } from "react";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from "styled-components";
import { Container } from "@common/components";
import {
  ErrorTooltip,
  InputHelper,
  PasswordToggle,
  InputLengthCounter,
} from "./components";
import { TextFieldProps } from "./types";
import { getInputStyle } from "./utils/getInputStyle";

export const TextField = memo(
  ({
    onChange,
    value,
    placeholder = " ",
    variant,
    labelText,
    errors,
    touched,
    maxLength,
    type,
    ...props
  }: TextFieldProps) => {
    const id = useId();
    const inputStyle = getInputStyle(variant);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePassword = () => {
      setIsShowPassword((prev) => !prev);
    };

    const isError =
      errors === null ? false : !touched ? false : !!errors?.length;

    const labelItem = labelText ? (
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
    ) : null;

    const passwordToggleItem =
      type === "password" ? (
        <PasswordToggle value={isShowPassword} toggle={togglePassword} />
      ) : null;

    const lengthCounterItem = maxLength ? (
      <InputLengthCounter isError={isError}>
        {value.length}/{maxLength}
      </InputLengthCounter>
    ) : null;

    const helperContainer =
      maxLength || type === "password" ? (
        <InputHelper>
          {passwordToggleItem}
          {lengthCounterItem}
        </InputHelper>
      ) : null;

    const inputType =
      type === "password" ? (isShowPassword ? "text" : "password") : type;

    return (
      <Container flex column gap="0.5em">
        <TextFieldContainer
          role="textbox"
          inputStyle={inputStyle}
          isError={isError}
        >
          <AppTextField
            id={id}
            isError={isError}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={inputType}
            {...props}
          />
          {labelItem}
          <ErrorTooltip errors={errors} touched={touched} />
        </TextFieldContainer>
        {helperContainer}
      </Container>
    );
  }
);

TextField.displayName = "TextField";

interface TextFieldContainerProps {
  inputStyle?: FlattenInterpolation<
    ThemedStyledProps<{ isError: boolean }, DefaultTheme>
  >;
  isError: boolean;
}

const TextFieldContainer = styled.section<TextFieldContainerProps>`
  --labelColor: ${({ theme, isError }) =>
    isError ? theme["red-700"] : theme["gray-700"]};
  --borderСolor: ${({ theme, isError }) =>
    isError ? theme["red-700"] : theme["gray-700"]};

  transition: color 0.2s ease;
  position: relative;
  ${({ inputStyle }) => inputStyle};
`;

const AppTextField = styled.input<{ isError: boolean }>`
  display: inline-block;
  font-size: 0.95em;
  width: 100%;
  background: transparent;

  transition: padding-right 0.2s 0.2s ease;

  padding: var(--inputPaddingTop)
    calc(
      var(--inputPaddingRight) +
        ${({ isError }) => (isError ? "var(--errorContainerPadding)" : "0em")}
    )
    var(--inputPaddingBottom) var(--inputPaddingLeft);
`;

const InputLabel = styled.label`
  font-size: 1em;
  font-weight: 400;
  position: absolute;

  cursor: text;

  top: 50%;
  left: var(--labelLeft, 0);

  white-space: nowrap;
  max-width: var(--labelWidth);
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;

  transform-origin: left;

  color: var(--labelColor);

  background: var(--labelBackground);

  padding-inline: var(--labelPaddingInline);

  transform: translate3d(0, var(--labelTranslateY), 0) scale(var(--labelScale));

  transition: transform 0.15s linear, background-color 0s 0.1s linear,
    padding-inline 0.1s linear, max-width 0.15s linear, left 0.1s linear,
    transform-origin 0.15s linear;
`;
