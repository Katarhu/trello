import { css } from "styled-components";
import { IFlexBoxProps, ISizableProps, ITextProps } from "@types";

export const sizableCss = css<ISizableProps>`
  width: ${({ width, fullWidth }) => (fullWidth ? "100%" : width)};
  max-width: ${({ maxWidth }) => maxWidth};

  height: ${({ height }) => height ?? "100%"};
  max-height: ${({ maxHeight, fullHeight }) =>
    fullHeight ? "100%" : maxHeight};
`;

export const flexCss = css<IFlexBoxProps>`
  display: ${({ flex }) => (flex ? "flex" : undefined)};
  flex-direction: ${({ column }) => (column ? "column" : undefined)};

  gap: ${({ gap }) => gap};

  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const textCss = css<ITextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ bold, fontWeight }) => (bold ? 500 : fontWeight)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}}%` : "150%")};
  text-align: ${({ center, end }) =>
    center ? "center" : end ? "end" : undefined};
`;
