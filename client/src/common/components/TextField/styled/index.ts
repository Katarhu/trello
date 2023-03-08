import { css } from "styled-components";

export const outlinedContainerCss = css<{ isError: boolean }>`
  --inputPaddingTop: 1em;
  --inputPaddingRight: 2.5em;
  --inputPaddingLeft: 1em;
  --inputPaddingBottom: 1em;

  --errorContainerPadding: 0.75em;
  --errorFontSize: 1.5em;

  --labelTranslateY: -50%;
  --labelScale: 1;
  --labelPaddingInline: 0;
  --labelBackground: transparent;
  --labelLeft: var(--inputPaddingLeft);
  --labelWidth: ${({ isError }) =>
    isError
      ? `calc(100% - (var(--errorContainerPadding) * 2.5 + var(--errorFontSize)))`
      : `calc(100% - var(--inputPaddingRight))`};

  &:focus-within {
    --labelColor: ${({ theme, isError }) =>
      isError ? theme["red-700"] : theme["blue-700"]};
    --borderСolor: ${({ theme, isError }) =>
      isError ? theme["red-700"] : theme["blue-700"]};
  }

  & input:not(:placeholder-shown) + label,
  &:focus-within {
    --labelTranslateY: -210%;
    --labelScale: 0.85;
    --labelPaddingInline: 0.35em;
    --labelBackground: white;
    --labelWidth: ${({ isError }) =>
      isError
        ? `calc((100% - var(--inputPaddingRight) - var(--errorFontSize)) * (1 / var(--labelScale)))`
        : `calc((100% - var(--inputPaddingRight)) * (1 / var(--labelScale)))`};
    --labelLeft: calc(var(--inputPaddingLeft) / 2);
  }

  border: 1px solid var(--borderСolor);
  border-radius: var(--borderRadius-300);
`;

export const filledContainerCss = css<{ isError: boolean }>`
  --inputPaddingTop: 1.5em;
  --inputPaddingRight: 2.5em;
  --inputPaddingLeft: 1em;
  --inputPaddingBottom: 0.5em;

  --errorContainerPadding: ${({ isError }) => (isError ? "0.75em" : "0em")};
  --errorFontSize: 1.5em;

  --labelTranslateY: -50%;
  --labelScale: 1;
  --labelLeft: var(--inputPaddingLeft);
  --labelWidth: ${({ isError }) =>
    isError
      ? `calc(100% - (var(--errorContainerPadding) * 2.5 + var(--errorFontSize)))`
      : `calc(100% - var(--inputPaddingRight))`};

  &:focus-within {
    --labelColor: ${({ theme, isError }) =>
      isError ? theme["red-700"] : theme["blue-700"]};
    --borderСolor: ${({ theme, isError }) =>
      isError ? theme["red-700"] : theme["blue-700"]};
  }

  & input:not(:placeholder-shown) + label,
  &:focus-within {
    --labelTranslateY: -130%;
    --labelScale: 0.8;
    --labelWidth: ${({ isError }) =>
      isError
        ? `calc((100% - var(--inputPaddingRight) - var(--errorFontSize)) * (1 / var(--labelScale)))`
        : `calc((100% - var(--inputPaddingRight)) * (1 / var(--labelScale)))`};
  }

  border-bottom: 1px solid var(--borderСolor);
  border-radius: var(--borderRadius-300) var(--borderRadius-300) 0 0;
  background: ${({ theme }) => theme["gray-300"]};
`;
