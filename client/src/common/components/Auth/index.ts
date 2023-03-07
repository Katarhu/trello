import styled from "styled-components";
import { Container } from "@common/components";

export const AuthContainer = styled(Container)`
  min-height: calc(100vh - var(--headerHeigth));
  overflow: hidden;
`;

export const FormImageContainer = styled.div`
  flex-shrink: 5;
  flex-grow: 1;

  padding: 3em;
`;

export const FormContainer = styled.div`
  flex-shrink: 10;
  flex-grow: 1;
  display: grid;
  place-items: center;
`;
