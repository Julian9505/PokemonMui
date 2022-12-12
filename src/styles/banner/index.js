import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CarouselImg = styled('img')(() => ({
  borderRadius: "15px",
  width: "90%",
  height: "100%",
}));
 
export const Mask = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  position: "absolute",
  width: "90%",
  height: "100%",
  background: "linear-gradient(0.125turn, rgba(255, 28, 28), rgba(53, 100, 174), rgba(255, 203, 5))",
  // zIndex: 999
  opacity: 0.65
}));

export const Contenedor = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100vw",
  height: "60vh",
  margin: "auto",
  top: "5.5rem",
}));

export const ContenedorTexto = styled(Box)(() => ({
  fontFamily: "pokemon-solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  width: "20vw",
  height: "20vh",
}));




