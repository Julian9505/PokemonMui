import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CarouselImg = styled('img')(() => ({

  width: "100%",
  height: "550px",
  // transition: "opacity 0.8 1",
  // opacity: "1",
  padding: "0px 0px"
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));
 
export const Mask = styled(Box)(() => ({
  position: "absolute",
  top: "5rem",
  width: "100%",
  height: "550px",
  background: "linear-gradient(0.125turn, rgba(255, 28, 28), rgba(53, 100, 174), rgba(255, 203, 5))",
  // zIndex: 999
  opacity: 0.65
}));
