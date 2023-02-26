import { ThemeProvider } from "styled-components";
import { theme } from "@constants/theme";
import { Outlet } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
