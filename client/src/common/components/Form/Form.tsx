import { FormEventHandler } from "react";
import { DefaultFormAttributes, ISizableProps } from "@types";
import styled from "styled-components";
import { sizableCss } from "@common/styles/styled.styles";

interface FormProps extends DefaultFormAttributes, ISizableProps {
  onSubmit: FormEventHandler;
}

export const Form = ({ onSubmit, children, ...props }: FormProps) => {
  return (
    <FormStyled onSubmit={onSubmit} {...props}>
      {children}
    </FormStyled>
  );
};

const FormStyled = styled.form<ISizableProps>`
  ${sizableCss};
`;
