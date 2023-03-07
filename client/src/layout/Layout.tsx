import { ReactNode } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";
import { Header } from "./components/Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <AppLayout>
      <Header />
      <AnimatePresence mode="wait">
        <MainContainer key={location.pathname} style={{ height: "100%" }}>
          {children}
        </MainContainer>
      </AnimatePresence>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - var(--headerHeigth));
`;

const MainContainer = styled(motion.main)`
  width: 100%;
  height: 100%;
`;
