import styled from "styled-components";

import { DefaultHeadingAttributes, ITextProps, THeadingLevel } from "@types";
import { textCss } from "@common/styles/styled.styles";

export interface HeadingProps extends DefaultHeadingAttributes, ITextProps {
  headingLevel?: THeadingLevel;
}

export const Heading = ({
  headingLevel = "h2",
  children,
  ...props
}: HeadingProps) => {
  return (
    <AppHeading as={headingLevel} {...props}>
      {children}
    </AppHeading>
  );
};

const AppHeading = styled.h2<ITextProps>`
  ${textCss};
`;
