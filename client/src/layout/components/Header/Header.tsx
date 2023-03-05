import styled from "styled-components";
import { Divider, Image } from "@components";
import Logo from "@assets/Logo.svg";
import {
  AuthNavigation,
  AuthUserNavigation,
  PublicButtons,
} from "./components";
import { AppLink } from "@common/components";
import {ROUTES} from "@constants";

export const Header = () => {
  return (
    <AppHeader>
      <HeaderImageContainer>
        <AppLink to={ROUTES.BOARDS}>
          <Image src={Logo} />
        </AppLink>
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
  height: var(--headerHeigth);

  padding: 0.8em 1.5em;
  border-bottom: 1px solid ${({ theme }) => theme["gray-500"]};

  display: flex;
  align-items: center;
  gap: var(--gap-700);
}`;

const HeaderImageContainer = styled.div`
  flex-shrink: 0;
`;
