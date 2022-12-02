import {  Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import {
  Product,
  ProductAddToCart,
  ProductImage,
} from "../../styles/product";
import { useUIContext } from "../../context/ui";


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

export default function Pokemones() {
  const { pokemons, setPokemons, offset, setOffset } = useUIContext();

  useEffect(() => {// El useefect no se hace asyncrono porque no funciona bien, anti patron
    const getPokemons = async (url) => {
      setPokemons([]);
      let res = await fetch(url),// aqui no necesito importar la libreria de axios o fetch por ser react
        json = await res.json();

        // debugger;
      //console.log(json);
      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        //console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      }); 
    };
    getPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  }, [offset]);// Como solo necesito ejecutar una vez la funcion de efecto se deja el arreglo vacio

  const handleOffset = () => {
    setOffset(offset === 0 ? 0 : offset-20);
  }

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      <Button variant="contained" onClick={handleOffset}>Atras</Button>
      <Button variant="contained" onClick={() => { 
        setOffset(offset+20)
        }}>Adelante</Button>
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
            {pokemons.length === 0 ? (
              <h3>Cargando...</h3>
            ) : (
              pokemons.map((el) => (
                <Pokemon key={Math.random()} name={el.name} avatar={el.avatar}/>
              ))
            )}
        </Grid>
    </>
  );
}
