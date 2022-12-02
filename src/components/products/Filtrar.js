import { Button, ButtonGroup, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Product, ProductAddToCart, ProductImage } from "../../styles/product";

function Pokemon({ avatar, name }) {
    return (
      <Product>
      <ProductImage src={avatar} />
      <ProductAddToCart variant="contained">
          {name}
      </ProductAddToCart>
  
      </Product>
    
    );
  }

export default function Filtrar(){
    const [filtros, setFiltros] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [pfiltrados, setPFiltrados] = useState([]);


    useEffect(() => {
        const getFiltros = async (url) => {
        let res = await fetch(url),
        Filtros = await res.json();
        // console.log(Filtros.results);
        setFiltros(Filtros.results);
    }
        getFiltros(`https://pokeapi.co/api/v2/type`);

    },[])


    useEffect(() => {

        const getPokemones = async (url) => {
            let res = await fetch(url),
            Pokemones = await res.json();
            setPFiltrados([]);
            Pokemones.pokemon.map( async(e) => {
                // console.log(e);
                let res = await fetch(e.pokemon.url),
                pokemones = await res.json();
                let pokemon = {
                    id: pokemones.id,
                    name: pokemones.name,
                    avatar: pokemones.sprites.front_default,
                };
                setPFiltrados((pokemons) => [...pokemons, pokemon]);
                // console.log(pokemon);
            });
        }
        getPokemones(filtro)
    }, [filtro]);


    return(
        <>
            <h1>Filtrar</h1>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            {filtros.length === 0 ? (
                <h3>Cargando...</h3>
                ) : (
                filtros.map((el) => (
                    <Button onClick={() => setFiltro(el.url) } key={Math.random()}>{el.name}</Button>
                ))
                )}
            </ButtonGroup>
            <hr/>
            <Grid
            id = "malla"  
            container
            spacing={{ xs: 2, md: 4 }}
            justifyContent="center"
            sx={[
            { margin: `20px 4px 10px 4px` },
            { overflow: 'auto' }
            ]}
            columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {pfiltrados.length === 0 ? (
                    <h3>Cargando...</h3>
                ) : (
                pfiltrados.map((el) => (
                    <Pokemon key={Math.random()} name={el.name} avatar={el.avatar}/>
                ))
                )}
            </Grid>
        </>    
    )
}
