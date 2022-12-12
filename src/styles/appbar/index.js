import { IconButton, List, TextField } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
// import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
// import Pokemon_solid from "";

export const AppbarContainer = styled(Box)(() => ({    
  display: 'flex',
  justifyContent: 'center',
  position: "fixed",
  width: "100%",
  zIndex: 3,
  alignItems: 'center',
  background: "linear-gradient(0.125turn, rgba(255, 28, 28), rgba(53, 100, 174), rgba(255, 203, 5))",
  borderRadius: "0 0 30px 30px",
}));

export const AppbarImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // flexGrow: 1,
  // height: "5rem",
  width: "5rem",
  marginRight: "2rem"
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const MyList = styled(List)(({ type }) => ({
  maxWidth: "100vw",
  display: type === "row" ? "flex" : "block",
  alignItems: "center",
  justifyContent: "space-between",
  flexGrow: "1",
  margin: "0px 10px 0px 10px",
  padding: "0px"
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));

export const SearchContainer = styled(TextField)(() => ({
  position: "relative",
  width: "12vw",
}));