import { memo, useId } from "react";
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { Container } from "@common/components";
import { InputLength } from "@common/components/TextField/components";
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
    ...props
  }: TextFieldProps) => {
    const id = useId();
    const inputStyle = getInputStyle(variant);

    const labelItem = labelText ? (
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
    ) : null;

    const lengthCounterItem = maxLength ? (
      <InputLength value={value} maxLength={maxLength} />
    ) : null;

    console.log(errors);

    return (
      <Container flex column gap="0.5em">
        <TextFieldContainer role="textbox" inputStyle={inputStyle}>
          {labelItem}
          <AppTextField
            id={id}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            {...props}
          />
        </TextFieldContainer>
        {lengthCounterItem}
      </Container>
    );
  }
);

TextField.displayName = "TextField";

interface TextFieldContainerProps {
  inputStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

const TextFieldContainer = styled.section<TextFieldContainerProps>`
  --labelColor: ${({ theme }) => theme["gray-700"]};
  --borderСolor: ${({ theme }) => theme["gray-700"]};

  ${({ inputStyle }) => inputStyle};
  position: relative;
`;

const AppTextField = styled.input<TextFieldProps>`
  display: inline-block;
  font-size: 0.95em;
  width: 100%;
  background: transparent;

  padding: var(--inputPaddingTop) var(--inputPaddingInline)
    var(--inputPaddingBottom);
`;

const InputLabel = styled.label`
  font-size: 1em;
  font-weight: 400;
  position: absolute;

  cursor: text;

  top: 50%;
  left: var(--labelLeft, 0);

  white-space: nowrap;
  max-width: var(--labelWidht);
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;

  transform-origin: left;

  color: var(--labelColor);

  background: var(--labelBackground);

  padding-inline: var(--labelPaddingInline);

  transform: translateY(var(--labelTranslateY)) scale(var(--labelScale));

  transition: transform 0.15s linear, background 0s 0.1s linear,
    padding-inline 0.1s linear, max-width 0.15s linear, left 0.1s linear;
`;
