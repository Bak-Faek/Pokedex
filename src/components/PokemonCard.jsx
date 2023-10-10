/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
function PokemonCard({pokemon}) {

    return (
        <div>
            <figure>
                {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.img}/> : <p>???</p>
            }
            </figure>
            <figcaption>
                {pokemon.name ? pokemon.name :<p>???</p>
                }
            </figcaption>
        </div>
    
    )
}


PokemonCard.propTypes = {
    pokemon : PropTypes.shape ({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}


export default PokemonCard;

