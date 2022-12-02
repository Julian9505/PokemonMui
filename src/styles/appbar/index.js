import { IconButton, List, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
// import "@fontsource/montez";
import { Colors, DrawerWidth } from "../theme";
// import Pokemon_solid from "";

export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 8px',
    // fontFamily: Pokemon_solid,
    background: "linear-gradient(0.125turn, rgba(255, 28, 28), rgba(53, 100, 174), rgba(255, 203, 5))",
    borderRadius: "0 0 30px 30px"
}));

export const AppbarImg = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // flexGrow: 1,
  // height: "5rem",
  width: "5rem",
  marginRight: "2rem"
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: 'lucida grande',
  color: Colors.secondary,
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
  maxWidth: "800px",
  display: type === "row" ? "flex" : "block",
  alignItems: "center",
  justifyContent: "space-around",
  flexGrow: "1"
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));