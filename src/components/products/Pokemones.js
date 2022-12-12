import {  Grid, Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import {
  Product,
  ProductAddToCart,
  ProductImage,
  ContainerPokemons
} from "../../styles/product";
import { useUIContext } from "../../context/ui";


function Pokemon({ avatar, name, busqueda }) {
  return (
    <Product>
      <ProductImage src={avatar} />
      <ProductAddToCart variant="contained" className={(busqueda === name) ? "busqueda":""}>
          {name}
      </ProductAddToCart>
    </Product>
  );
}

export default function Pokemones() {
  const { pokemons, setPokemons, offset, setOffset, busqueda } = useUIContext();

  const getPokemons = async (url) => {
    setPokemons([]);
    let res = await fetch(url),
      json = await res.json();

    json.results.forEach(async (el) => {
      let res = await fetch(el.url),
      json = await res.json();

      let pokemon = {
        id: json.id,
        name: json.name,
        avatar: json.sprites.front_default,
      };
      setPokemons((pokemons) => [...pokemons, pokemon]);
    }); 
  };

  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  }, [offset]);

  return (
    <ContainerPokemons>
      <h1 style={{textAlign: "center"}}>Peticiones Asíncronas en Hooks</h1>
      <div style={{display: "flex", width: "80%", justifyContent:"space-around", margin: "auto" }}>
        <Button variant="contained" onClick={() => setOffset(offset === 0 ? 0 : offset-20)}>Atras</Button>
        <Button variant="contained" onClick={() =>setOffset(offset+20)}>Adelante</Button>
      </div>
        <Grid
          // className={classes.btn}
          id = "malla"  
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          position= "relative"
          top= "12vh"
          columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {pokemons.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              pokemons.map((el) => (
                <Pokemon key={Math.random()} busqueda={busqueda} name={el.name} avatar={el.avatar}/>
              ))
            )}
        </Grid>
    </ContainerPokemons>
  );
}
