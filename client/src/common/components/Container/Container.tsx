import {
  DefaultDivAttributes,
  IFlexBoxProps,
  ISizableProps,
  IWithChildrenProps,
} from "@types";
import styled from "styled-components";
import { flexCss, sizableCss } from "@common/styles/styled.styles";

export type ContainerProps = IFlexBoxProps &
  ISizableProps &
  IWithChildrenProps &
  DefaultDivAttributes;

export const Container = ({ children, ...props }: ContainerProps) => {
  console.log(props.fullWidth)
  return <AppContainer {...props}>{children}</AppContainer>;
};

const AppContainer = styled.div<ContainerProps>`
  ${flexCss};
  ${sizableCss};
`;
