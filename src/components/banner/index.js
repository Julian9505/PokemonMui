import { Typography} from "@mui/material";
// import { useTheme } from "@mui/system";
import {
  Mask, 
  Contenedor,
  ContenedorTexto,
} from "../../styles/banner";
import pokemon1 from "../../data/pokemon1.jpg";
import pokemon2 from "../../data/pokemon2.jpg";
import pokemon3 from "../../data/pokemon3.jpeg";
import pokemon4 from "../../data/pokemon4.webp";
import pokemon5 from "../../data/pokemon5.jpeg";
import pokemon6 from "../../data/pokemon6.jpg";
import pokemon7 from "../../data/pokemon7.webp";
import pokemon8 from "../../data/pokemon8.webp";
import pokebola from "../../data/pokebola.png";
import Carousel from "./Carousel.js";
import { useState } from "react";
// import "../../styles/"


export default function Banner() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  const images = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8];
  // console.log(images);
  const [click, setClick] = useState(true);

  const Info = ()=>{
    if(click){
      return(
        <>
          <Typography style={{top: "10vh", fontFamily:"pokemon-solid", letterSpacing:"5px"}} className="info" variant="h6">Pokemones:  
          Encontraras todos los pokemones en orden generacional.
          </Typography>
          <Typography style={{top: "28vh", fontFamily:"pokemon-solid", letterSpacing:"5px"}} className="info" variant="h6">Buscar: podras buscar todos los pokemones y obtener su estadisticas.
          </Typography>
          <Typography style={{top: "45vh", fontFamily:"pokemon-solid", letterSpacing:"5px"}} className="info" variant="h6">Filtrar: podras filtrar los pokemones por tipo.
          </Typography>
        </>
      );
    }else{
      return(
        <></>
      )
    }
  }

  return (
    <Contenedor>
      <Mask/>
      <Carousel images={images} autoPlay={true}/>
      <ContenedorTexto onClick={()=>setClick(!click)} className="pokeinfo">
        <img src={pokebola} alt="pokebola" onClick={()=>setClick(!click)} className="pokeinfo"/>
      </ContenedorTexto>
      <Info/>
    </Contenedor>
  );
}
