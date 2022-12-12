import { AppbarContainer, AppbarImg, MyList, SearchContainer } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton, InputAdornment, Menu, MenuItem } from "@mui/material";
import pokebola from "../../data/pokebola2.png";
import { useUIContext } from "../../context/ui";
import pokebola1 from "../../data/pokebola.png";
import { Link } from "react-router-dom";

const options = [
  'Pokemones',
  'Buscar',
  'Filtrar'
];

const ITEM_HEIGHT = 48;

export default function AppbarMobile({ matches }) {
  const { setShowSearchBox, showSearchBox, busqueda, setBusqueda, anchorEl, setAnchorEl } = useUIContext();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <BrowserRouter>
    <AppbarContainer>
      <MyList type="row">
        {/* <MenuIcon onClick={() => setDrawerOpen(!drawerOpen)}/> */}
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '15ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} onClick={handleClose}>
              <Link 
              style={{textDecoration:"none", fontFamily:"pokemon-solid", color:"black"}} 
              to={option.toLocaleLowerCase()}>
                {option}
              </Link> 
            </MenuItem>
          ))}
        </Menu>
        <AppbarImg src={pokebola}/>
        {showSearchBox ? (
          <SearchContainer label="Busqueda" onChange={e => setBusqueda(e.target.value) } value={busqueda} color="secondary" focused variant="standard" InputProps={{
            startAdornment: (
              <InputAdornment position="start">
              <img src={pokebola1} alt="pokebola" className="pokeinfoicon"/>
            </InputAdornment>
          )
        }}/>):(<></>)}
        <IconButton onClick={() => setShowSearchBox(!showSearchBox)}>
          <SearchIcon />
        </IconButton>
        <Actions matches={matches} />
      </MyList>
    </AppbarContainer>
        // </BrowserRouter>
  );
}
