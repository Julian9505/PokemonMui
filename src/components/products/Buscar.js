import {  FormControl, Grid, InputLabel, Input, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";
// import { Pokemon } from "./";
import {
  Colores,
  Product,
  ProductAddToCart,
  ProductImage,
  } from "../../styles/product";

  function Pokemon({ avatar, name, esta, busqueda, Color1, Color2 }) {// como guardar estas tarjetas
    const [stats, setStats] = useState(false);
    console.log(Color1, Color2);
    return (
        <Product>
            <ProductImage src={avatar} color1={Color1} color2={Color2} />
            <Colores />
            <ProductAddToCart variant="contained" onClick={()=> {setStats(!stats)}} className={(busqueda === name) ? "busqueda":""}>
              {name}
            </ProductAddToCart>
            {(!stats)? (
            <h3> </h3>
            ) : (
            esta.map((el) => (
                <div key={Math.random()}>{el.stat.name}-{el.base_stat}</div>
            ))
            )}
        </Product>
    );
}

export default function Buscar() {
  const { pokemones, setPokemones, pokemon, setPokemon, envio, setEnvio, busqueda } = useUIContext();

  useEffect(() => {
    debugger;
    if(envio.lenght !== 0){
      getPokemons(`https://pokeapi.co/api/v2/pokemon/${envio}`);
    }
  
  }, [envio]);

  const getPokemons = async (url) => {
    // getPokemons();
    // setEnvio(false);
    let res = await fetch(url),
    poke = await res.json();
    debugger;
    let Lista = {
      nombre: poke.name,
      img: poke.sprites.front_default,
      color1: poke.types[0].type.name,
      color2: poke.types[1] ? poke.types[1].type.name : "default",
      id: poke.id,
      estadisticas: poke.stats
    };
    if(pokemones.lenght <= 1){
      console.log(pokemones);
      setPokemones(Lista);
    }else{
      setPokemones((pokemons) => [...pokemons, Lista]);
      console.log(pokemones);
    }
  };

  return (
    <>
      <Grid 
      container
      position= "relative"
      justifyContent="center"
      top= "18vh">
        <FormControl>
          <InputLabel htmlFor="email">Elige tu Pokemon</InputLabel>
          <Input onChange={e => setPokemon(e.target.value) } variant="outlined" id="email" type="text" aria-describedby="text-helper"/>
          {/* <FormHelperText id="text-helper">Elige tu Pokemon</FormHelperText> */}
          <Button onClick={()=> {setEnvio(pokemon)}} variant="contained" color="primary"> Enviar </Button>
        </FormControl>
      </Grid>
      <Grid
      id = "malla"  
      container
      spacing={{ xs: 2, md: 4 }}
      justifyContent="center"
      position= "relative"
      top= "27vh"
      columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pokemones.length === 0 ? (
        <h3>Cargando...</h3>
        ) : (
        pokemones.map((el) => (
          <Pokemon key={el.id} busqueda={busqueda} name={el.nombre} avatar={el.img} esta={el.estadisticas} Color1={el.color1} Color2={el.color2} />
        ))
        )}
      </Grid>
    </>
  )
}