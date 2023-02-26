import { Divider, Image, SearchBar } from "@components";
import Boards from "@assets/Boards.svg";
import styled from "styled-components";

export const AuthNavigation = () => {
  return (
    <>
      <HeaderLink>
        <Image src={Boards} />
        <HeaderLinkText>Boards</HeaderLinkText>
      </HeaderLink>

      <Divider />

      <SearchBar />
    </>
  );
};

const HeaderLink = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--gap-300);
`;

const HeaderLinkText = styled.p`
  font-size: 1em;
`;
