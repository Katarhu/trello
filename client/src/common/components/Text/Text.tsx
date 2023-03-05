import { ITextProps, IWithChildrenProps } from "@types";
import styled from "styled-components";
import { textCss } from "@common/styles/styled.styles";

export interface TextProps extends ITextProps, IWithChildrenProps {
  as?: keyof JSX.IntrinsicElements;
}

export const Text = ({ children, as = "p", ...props }: TextProps) => {
  return (
    <AppText as={as} {...props}>
      {children}
    </AppText>
  );
};

Text.defaultProps = {
  fontSize: 1,
  bold: false,
  fontWeight: 400,
};

const AppText = styled.p<ITextProps>`
  ${textCss};
`;
