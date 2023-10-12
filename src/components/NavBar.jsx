
function NavBar ({pokemonIndex,setpokemonIndex,pokemonList}){
   
    function handleClick (index)  {
        setpokemonIndex(index)
    }
        
    return (
        <div>
            {pokemonList.map((element, index) => 
                    (             
                        <button key={element.name} onClick={() => handleClick(index)}>{element.name}</button>
                    )
                )
            }  
        </div> 
    );
    
}


export default NavBar;