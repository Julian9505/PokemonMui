import {  FormControl, FormHelperText, Grid, InputLabel, Input, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";
// import { Pokemon } from "./";
import {
    Product,
    ProductAddToCart,
    ProductImage,
  } from "../../styles/product";

  function Pokemon({ avatar, name, esta }) {// como guardar estas tarjetas
    const [showStats, setShowStats] = useState(false);

    return (
        <Product>
            <ProductImage src={avatar} />
            <ProductAddToCart variant="contained">
                {name}
            </ProductAddToCart>
            <Button onClick={()=> {setShowStats(!showStats)}} variant="outlined">Estadisticas</Button>
            {(esta.length === 0 || !showStats)? (
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
  const { pokemones, setPokemones, pokemon, setPokemon, envio, setEnvio} = useUIContext();

  useEffect(() => {

    const getPokemons = async (url) => {

        let res = await fetch(url),
          poke = await res.json();
  
          // debugger;
          let Lista = {
            nombre: poke.name,
            img: poke.sprites.front_default,
            color1: poke.types[0].type.name,
            color2: poke.types[1] ? poke.types[1].type.name : "default",
            id: poke.id,
            estadisticas: poke.stats
          };
          console.log(Lista.estadisticas)
          if(Lista.lenght < 1){
            setPokemones(() => [Lista]);// No se como areglar esto
          }else{
            setPokemones((pokemons) => [...pokemons, Lista]);
          }

          console.log(pokemones);
    };

    if(pokemon.length >= 2){
        // setEnvio(false);
        getPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    }else{
        // getPokemons(``);
        console.log(pokemon.length);
        console.log(`vacio`);
        // setEnvio(false);

    }
  }, [envio]);


    return (
        <>
            <Grid container>
                <Grid item md={12}>
                    <FormControl>
                        <InputLabel htmlFor="email">InputLabel</InputLabel>
                        <Input onChange={e => setPokemon(e.target.value) } variant="outlined" id="email" type="text" aria-describedby="text-helper"/>
                        <FormHelperText id="text-helper">Pon tu email</FormHelperText>
                        <Button onClick={()=> {setEnvio(envio + 1)}} variant="contained" color="primary"> Enviar </Button>
                    </FormControl>
                </Grid>
            </Grid>
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
                {pokemones.length === 0 ? (
                <h3>Cargando...</h3>
                ) : (
                pokemones.map((el) => (
                    <Pokemon key={el.id} name={el.nombre} avatar={el.img} esta={el.estadisticas}/>
                ))
                )}
            </Grid>
        </>
    )
}