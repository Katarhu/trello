import { css } from "styled-components";

export const outlinedContainerCss = css`
  --inputPaddingInline: 1em;
  --inputPaddingBottom: 1em;
  --inputPaddingTop: 1em;

  --labelTranslateY: -50%;
  --labelScale: 1;
  --labelPaddingInline: 0;
  --labelBackground: transparent;
  --labelLeft: var(--inputPaddingInline);
  --labelWidht: calc((100% - var(--inputPaddingInline) * 2));

  &:focus-within {
    --labelColor: ${({ theme }) => theme["blue-700"]};
    --borderСolor: ${({ theme }) => theme["blue-700"]};
  }

  &:focus-within,
  &:has(input:not(:placeholder-shown)) {
    --labelTranslateY: -210%;
    --labelScale: 0.85;
    --labelPaddingInline: 0.35em;
    --labelBackground: white;
    --labelWidht: calc(
      (100% - var(--inputPaddingInline) * 2) * (1 / var(--labelScale))
    );
    --labelLeft: calc(var(--inputPaddingInline) / 2);
  }

  border: 1px solid var(--borderСolor);
  border-radius: var(--borderRadius-300);
`;

export const filledContainerCss = css`
  --inputPaddingInline: 1em;
  --inputPaddingBottom: 0.5em;
  --inputPaddingTop: 1.5em;

  --labelTranslateY: -50%;
  --labelScale: 1;
  --labelLeft: var(--inputPaddingInline);
  --labelWidht: calc((100% - var(--inputPaddingInline) * 2));

  &:focus-within {
    --labelColor: ${({ theme }) => theme["blue-700"]};
    --borderСolor: ${({ theme }) => theme["blue-700"]};
  }

  &:focus-within,
  &:has(input:not(:placeholder-shown)) {
    --labelTranslateY: -130%;
    --labelScale: 0.8;
    --labelWidht: calc(
      (100% - var(--inputPaddingInline) * 2) * (1 / var(--labelScale))
    );
  }

  border-bottom: 1px solid var(--borderСolor);
  border-radius: var(--borderRadius-300) var(--borderRadius-300) 0 0;
  background: ${({ theme }) => theme["gray-300"]};
`;
