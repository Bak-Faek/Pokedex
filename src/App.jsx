import "./App.css";
import PokemonCard from "./components/PokemonCard"
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App (){
 const [pokemonIndex,setpokemonIndex] = useState (0);

 const handleClickMinus = () => { 
  if(pokemonIndex>0)
  setpokemonIndex (pokemonIndex - 1 )
 
 }
 const handleaClickAdd = () => {
  if(pokemonIndex < pokemonList.length - 1)
  setpokemonIndex (pokemonIndex + 1 )
 }

  return (
  <div>
    <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
    {pokemonIndex > 0 && (<button onClick={handleClickMinus}>Précédent</button>)}
    {pokemonIndex < pokemonList.length - 1 && (<button onClick={handleaClickAdd}>Suivant</button>)}
  </div>
  );
}


export default App;

