function NavBar ({setpokemonIndex,pokemonIndex,pokemonList}){
   
    // const handleClickMinus = () => { 
    //  if(pokemonIndex>0)
    //  setpokemonIndex (pokemonIndex - 1 )
    
    // }
    // const handleClickAdd = () => {
    //  if(pokemonIndex < pokemonList.length - 1)
    //  setpokemonIndex (pokemonIndex + 1 )
    // }
const handleClick = () => {
    for (let i=0 ; i < pokemonList.length ; i++)
    if (pokemonIndex === i){
        return i;
    }
    }


    return (
        <div>
            <ul>
            {pokemonList.map ((pokemonList => (
                <li key={pokemonList.name}>
              <button onClick={handleClick}>{pokemonList.name}</button>
              </li>
                    )
                ) 
            )
            }
            </ul>

           
            {/* {pokemonIndex > 0 && (<button onClick={handleClickMinus}>Précédent</button>)}
            {pokemonIndex < pokemonList.length - 1 && (<button onClick={handleClickAdd}>Suivant</button>)} */}
   
         </div>
    );
    
}


export default NavBar;