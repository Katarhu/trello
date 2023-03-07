import { css } from "styled-components";

export const primaryButtonCss = css`
  --borderColor: transparent;
  --backgroundColor: ${({ theme }) => theme["gray-400"]};

  padding: 0.5em 1.5em;
  background: var(--backgroundColor);
  border: 2px solid var(--borderColor);
  border-radius: var(--borderRadius-300);

  &:hover {
    --backgroundColor: ${({ theme }) => theme["gray-300"]};
  }

  &:focus {
    --borderColor: ${({ theme }) => theme["gray-600"]};
  }

  &[disabled] {
    opacity: 0.75;
    pointer-events: none;
  }
`;

export const secondaryButtonCss = css`
  background: transparent;
  padding: 0.5em 1.5em;

  --borderColor: transparent;

  border: 2px solid var(--borderColor);
  border-radius: var(--borderRadius-300);

  &:hover {
    background: ${({ theme }) => theme["gray-300"]};
  }

  &:focus {
    --borderColor: ${({ theme }) => theme["gray-700"]};
  }

  &[disabled] {
    opacity: 0.75;
    pointer-events: none;
  }
`;
