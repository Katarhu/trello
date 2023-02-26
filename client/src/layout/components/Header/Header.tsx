import styled from "styled-components";
import { Divider, Image } from "@components";
import Logo from "@assets/Logo.svg";
import {
  AuthNavigation,
  AuthUserNavigation,
  PublicButtons,
} from "./components";

export const Header = () => {
  return (
    <AppHeader>
      <HeaderImageContainer>
        <Image src={Logo} />
      </HeaderImageContainer>

      <Divider />

      <AuthNavigation />

      <PublicButtons />
      <AuthUserNavigation />
    </AppHeader>
  );
};

const AppHeader = styled.header`
  width: 100%;
  height: 4em;

  padding: 0.8em 1.5em;
  border-bottom: 1px solid ${({ theme }) => theme["gray-500"]};

  display: flex;
  align-items: center;
  gap: var(--gap-700);
}`;

const HeaderImageContainer = styled.div`
  flex-shrink: 0;
`;
