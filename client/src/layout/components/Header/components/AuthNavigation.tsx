import { Divider, Image, SearchBar } from "@components";
import Boards from "@assets/Boards.svg";
import styled from "styled-components";
import { AppLink } from "@common/components";
import { ROUTES } from "@constants";

export const AuthNavigation = () => {
  return (
    <>
      <HeaderLink to={ROUTES.BOARDS}>
        <Image src={Boards} />
        <HeaderLinkText>Boards</HeaderLinkText>
      </HeaderLink>

      <Divider />

      <SearchBar />
    </>
  );
};

const HeaderLink = styled(AppLink)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--gap-300);
`;

const HeaderLinkText = styled.p`
  font-size: 1em;
`;
