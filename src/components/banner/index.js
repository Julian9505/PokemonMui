// import { Typography} from "@mui/material";
// import { useTheme } from "@mui/system";
import {
  // BannerContainer,
  Mask
} from "../../styles/banner";
import pokemon1 from "../../data/pokemon1.jpg";
import pokemon2 from "../../data/pokemon2.jpg";
import pokemon3 from "../../data/pokemon3.jpeg";
import pokemon4 from "../../data/pokemon4.webp";
import pokemon5 from "../../data/pokemon5.jpeg";
import pokemon6 from "../../data/pokemon6.jpg";
import pokemon7 from "../../data/pokemon7.webp";
import pokemon8 from "../../data/pokemon8.webp";
import Carousel from "./Carousel.js";

export default function Banner() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  const images = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, pokemon7, pokemon8];
  // console.log(images);

  return (
    <div>
      <Mask/>
      <Carousel images={images} autoPlay={true}/>
    </div>
  );
}
