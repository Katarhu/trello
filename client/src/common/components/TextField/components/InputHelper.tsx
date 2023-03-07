import styled from "styled-components";
import { IWithChildrenProps } from "@types";

export const InputHelper = ({ children }: IWithChildrenProps) => {
  return <InputHelperContainer>{children}</InputHelperContainer>;
};

const InputHelperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.25em;
`;

export const InputLengthCounter = styled.span<{ isError?: boolean }>`
  flex-grow: 1;
  text-align: end;
  font-size: 0.85em;
  transition: color 0.2s ease, font-weight 0.2s ease;
  color: ${({ theme, isError }) =>
    isError ? theme["red-700"] : theme["gray-700"]};
  font-weight: ${({ isError }) => (isError ? 500 : undefined)};
`;

interface PasswordToggleProps {
  value: boolean;
  toggle: () => void;
}

export const PasswordToggle = ({ value, toggle }: PasswordToggleProps) => {
  const passwordText = value ? "Hide password" : "Show password";

  return (
    <PasswordToggleText type="button" onClick={toggle}>
      {passwordText}
    </PasswordToggleText>
  );
};

const PasswordToggleText = styled.button`
  font-size: 0.8em;
  background: transparent;
`;
