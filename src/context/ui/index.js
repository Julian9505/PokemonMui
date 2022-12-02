import { createContext, useContext, useState } from "react";

export const UIContext = createContext({});
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pokemones, setPokemones] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [envio, setEnvio] = useState(1);
    const [filtros, setFiltros] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [pfiltrados, setPFiltrados] = useState([]);

    const value = {
        drawerOpen,
        setDrawerOpen,
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
        setPFiltrados
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}