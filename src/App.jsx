import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";
import { useEffect } from "react";




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App (){
 const [pokemonIndex,setpokemonIndex] = useState (0);

 useEffect(
  () =>  {
    alert ("hello pokemon trainer :)")
  }, 
  []
);

  return (
  <div>
    <PokemonCard pokemonList = {pokemonList[pokemonIndex]} />
    <NavBar setpokemonIndex={setpokemonIndex} pokemonList = {pokemonList} pokemonIndex={pokemonIndex}/>


  </div>
  );
 
}


export default App;

