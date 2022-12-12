import {
  IconButton, InputAdornment
} from "@mui/material";
import {
  AppbarContainer,
  AppbarImg,
  MyList,
  SearchContainer,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import pokebola from "../../data/pokebola2.png";
import { Link } from '@mui/material';
import pokebola1 from "../../data/pokebola.png";

export default function AppbarDesktop({ matches }) {
  
  const { showSearchBox, setShowSearchBox, busqueda, setBusqueda } = useUIContext();

  return (
    <AppbarContainer>
      <MyList type="row">
        <AppbarImg src={pokebola}/>
        <Link rel="noopener" underline="none" color="#000" href="/" >Pokemones</Link>
        <Link rel="noopener" underline="none" color="#000" href="/buscar">Buscar</Link>
        <Link rel="noopener" underline="none" color="#000" href="/filtrar">Filtrar</Link>
        {showSearchBox ? (
              <SearchContainer label="Busqueda" onChange={e => setBusqueda(e.target.value) } value={busqueda} vcolor="secondary" focused variant="standard" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={pokebola1} alt="pokebola" className="pokeinfoicon"/>
                  </InputAdornment>
                )
              }}/>
            ):(<></>)}
        <IconButton onClick={() => {setShowSearchBox(!showSearchBox)}}>
            <SearchIcon />
        </IconButton>
        <Actions matches={matches} />   
      </MyList>
    </AppbarContainer>
  );
}
