import { element } from "prop-types";

function NavBar ({pokemonIndex,setpokemonIndex,pokemonList}){
   
    function handleClick (index)  {
        setpokemonIndex(index);
        if (element.name = 'pikachu')
        useEffect(
                () =>  {
               
                alert ("pika pikachu !!!")
                }, 
            []
        )
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