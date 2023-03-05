import { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AppLayout>
      <Header />
      <MainContainer>{children}</MainContainer>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.main`
  width: 100%;
  height: calc(100vh - var(--headerHeigth));
  padding: var(--mainLayoutPadding);
`;
