/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
function PokemonCard({pokemonList}) {

    return (
        <div>
            <figure>
                {pokemonList.imgSrc ? <img src={pokemonList.imgSrc} alt={pokemonList.img}/> : <p>???</p>
            }
            </figure>
            <figcaption>
                {pokemonList.name ? pokemonList.name :<p>???</p>
                }
            </figcaption>
        </div>
    
    )
}


PokemonCard.propTypes = {
    pokemonList : PropTypes.shape ({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}


export default PokemonCard;

