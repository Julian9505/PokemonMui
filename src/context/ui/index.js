import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pokemones, setPokemones] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [envio, setEnvio] = useState([]);
    const [filtros, setFiltros] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [pfiltrados, setPFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    // const [temp, setTemp] = useState([]);

    const value = {
        showSearchBox, 
        setShowSearchBox,
        pokemons,
        setPokemons,
        offset,
        setOffset,
        pokemones,
        setPokemones,
        pokemon,
        setPokemon,
        envio,
        setEnvio,
        filtros,
        setFiltros,
        filtro,
        setFiltro,
        pfiltrados,
        setPFiltrados,
        busqueda, 
        setBusqueda,
        anchorEl, 
        setAnchorEl,
        // temp, 
        // setTemp
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}