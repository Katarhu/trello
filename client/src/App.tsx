import { ThemeProvider } from "styled-components";
import { theme } from "@constants/theme";
import { useOutlet } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  const outlet = useOutlet();

  return (
    <ThemeProvider theme={theme}>
      <Layout>{outlet}</Layout>
    </ThemeProvider>
  );
}

export default App;
