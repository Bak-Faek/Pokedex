

function NavBar ({setpokemonIndex,pokemonIndex,pokemonList}){
   
    const handleClickMinus = () => { 
     if(pokemonIndex>0)
     setpokemonIndex (pokemonIndex - 1 )
    
    }
    const handleClickAdd = () => {
     if(pokemonIndex < pokemonList.length - 1)
     setpokemonIndex (pokemonIndex + 1 )
    }
   
     return (
     <div>

       {pokemonIndex > 0 && (<button onClick={handleClickMinus}>Précédent</button>)}
       {pokemonIndex < pokemonList.length - 1 && (<button onClick={handleClickAdd}>Suivant</button>)}
   
     </div>
     );
    
     }
export default NavBar;