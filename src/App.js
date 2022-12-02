import "./App.css";
import { Container, Stack } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import { UIProvider } from "./context/ui";
import { useEffect } from "react";
import Pokemones from "./components/products/Pokemones";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buscar from "./components/products/Buscar";
import Filtrar from "./components/products/Filtrar";
import Banner from "./components/banner"



function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}>
          <Stack>
            <UIProvider>
              <Appbar/>
              <Banner />
              <Routes>
                <Route path="/" element = {<Pokemones/>} />
                <Route path="/buscar" element = {<Buscar/>} />
                <Route path="/filtrar" element = {<Filtrar/>} />
              </Routes>
            </UIProvider>
          </Stack>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
