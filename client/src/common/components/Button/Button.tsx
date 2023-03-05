import styled from "styled-components";
import { MouseEventHandler, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { DefaultButtonAttributes } from "@types";

interface ButtonProps extends DefaultButtonAttributes {
  children: ReactNode;
  onClick?: MouseEventHandler;
  submit?: boolean;
}

export const Button = ({
  children,
  onClick,
  submit = false,
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} {...props} type={submit ? "submit" : "button"}>
      {children}
    </button>
  );
};

export const AppLink = ({ to, children, ...props }: LinkProps) => {
  return (
    <AppButton as={Link} to={to} {...props}>
      {children}
    </AppButton>
  );
};

const AppButton = styled.button`
  display: block;
  font-size: inherit;
  max-width: fit-content;
  max-height: fit-content;
`;
