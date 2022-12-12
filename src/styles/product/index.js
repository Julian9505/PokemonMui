import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
// import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const ContainerPokemons = styled(Box)(({ theme }) => ({
  position: "relative", 
  top: "12vh",
  marginBottom: "180px"
}));

export const Product = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // [theme.breakpoints.up("md")]: {
  //   position: "relative",
  // },
}));

export const ProductImage = styled("img")(({ src, Color1, Color2 }) => ({
  src: `url(${src})`,
  width: "100%",
  padding: '10px',
  // background: `radial-gradient(${Colors.Color1} 33%, ${Colors.Color2} 33%)`,
  // borderRadius: "50%"
}));

export const Colores = styled(Box)(({ color1, color2 }) => ({
  width: "100%",
  padding: '10px',
  background: `radial-gradient(${Colors.color1} 33%, ${Colors.color2} 33%)`,
  borderRadius: "50%"
}));

export const ProductAddToCart = styled(Button)(() => ({
  fontFamily: "pokemon-solid",
  width: "120px", 
  fontSize: "12px",
  background: Colors.secondary,
  opacity: 0.9,
}));


