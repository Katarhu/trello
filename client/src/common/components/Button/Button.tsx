import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { Link, LinkProps } from "react-router-dom";
import { ISizableProps } from "@types";
import { sizableCss } from "@common/styles/styled.styles";
import { getButtonStyle } from "@common/components/Button/utils";
import { ButtonProps, ButtonVariant } from "./types";

export const Button = ({
  children,
  onClick,
  variant,
  submit = false,
  ...props
}: ButtonProps) => {
  const buttonStyle = getButtonStyle(variant);

  return (
    <AppButton
      onClick={onClick}
      buttonStyle={buttonStyle}
      type={submit ? "submit" : "button"}
      {...props}
    >
      {children}
    </AppButton>
  );
};

type AppLinkProps = LinkProps &
  ISizableProps & { variant?: ButtonVariant; blue?: boolean };

export const AppLink = ({
  to,
  children,
  variant,
  blue,
  ...props
}: AppLinkProps) => {
  const buttonStyle = getButtonStyle(variant);

  return (
    <AppLinkStyled to={to} $buttonStyle={buttonStyle} $blue={blue} {...props}>
      {children}
    </AppLinkStyled>
  );
};

const commonButtonCss = css`
  display: inline-block;
  font-size: inherit;
  background: transparent;
`;

const AppButton = styled.button<
  ISizableProps & {
    buttonStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  }
>`
  ${commonButtonCss};
  ${({ buttonStyle }) => buttonStyle};
  ${sizableCss};
`;

type AppLinkStyledProps = ISizableProps & {
  $blue?: boolean;
  $buttonStyle?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
};

const AppLinkStyled = styled(Link)<AppLinkStyledProps>`
  ${commonButtonCss};
  ${sizableCss};
  ${({ $buttonStyle }) => $buttonStyle};
  color: ${({ $blue, theme }) => ($blue ? theme["blue-700"] : undefined)};

  &:visited {
    color: ${({ $blue, theme }) => ($blue ? theme["blue-700"] : undefined)};
  }
`;
