import {
  // ListItemText,
  IconButton
} from "@mui/material";
import {
  AppbarContainer,
  AppbarImg,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import pokebola from "../../data/pokebola2.png";
import { Link } from '@mui/material';
// import Black from "@mui/material/colors/"

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarImg src={pokebola}/>
      <MyList type="row">
        <Link rel="noopener" underline="none" color="#000" href="/" >Pokemones</Link>
        <Link rel="noopener" underline="none" color="#000" href="/buscar">Buscar</Link>
        <Link rel="noopener" underline="none" color="#000" href="/filtrar">Filtrar</Link>
        <IconButton onClick={() => setShowSearchBox(true)}>
            <SearchIcon />
        </IconButton>
      </MyList>
       <Actions matches={matches} />   
    </AppbarContainer>
  );
}
