import { Divider, Image, SearchBar } from "@components";
import Boards from "@assets/Boards.svg";
import styled from "styled-components";
import { AppLink, Container } from "@common/components";
import { ROUTES } from "@constants";

export const AuthNavigation = () => {
  return (
    <>
      <AppLink to={ROUTES.BOARDS}>
        <Container flex alignItems="center" gap="var(--gap-300)">
          <Image src={Boards} />
          <HeaderLinkText>Boards</HeaderLinkText>
        </Container>
      </AppLink>

      <Divider />

      <SearchBar />
    </>
  );
};

const HeaderLinkText = styled.p`
  font-size: 1em;
`;
