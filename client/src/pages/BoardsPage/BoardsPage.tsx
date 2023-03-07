import styled from "styled-components";

export const BoardsPage = () => {
  return (
    <PageContainer>
      <BoardsSection>
        <SectionTitle>Recently viewed</SectionTitle>

        <BoardsContainer>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
          <MockedBoard>board</MockedBoard>
        </BoardsContainer>
      </BoardsSection>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BoardsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--gap-600);
`;

const SectionTitle = styled.h3`
  font-size: var(--font-size-large);
  font-weight: 500;
`;

const BoardsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: var(--gap-lg);

  overflow-x: auto;
  scroll-snap-type: x;
`;

const MockedBoard = styled.div`
  flex-shrink: 0;
  width: 362px;
  height: 144px;

  background: yellow;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;
