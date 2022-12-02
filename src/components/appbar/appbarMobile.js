import { AppbarContainer, AppbarImg } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import pokebola from "../../data/pokebola2.png";
import { useUIContext } from "../../context/ui";
import { Container } from "@mui/system";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>{/*porque si esta en true no me abre el drawer de una vez*/}
        <MenuIcon />
      </IconButton>
      <Container sx={{
        flexGrow:1
      }} />
      <AppbarImg src={pokebola}/>
      <Container sx={{
        flexGrow:1
      }} />
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
