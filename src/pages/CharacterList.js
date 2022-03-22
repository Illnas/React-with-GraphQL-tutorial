import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";



const CharacterList = () => {

   const {error, loading, data} = useCharacters()

    if(loading) return <div>spinner...</div>
    if(error) return <div>Something went wrong!</div>


  return <div>
      {data.characters.results.map(character => {
          return (
              <Link to={`/${character.id}`} key={character.id}>
                  <img src={character.image} alt="" />
                  <h2>{character.name}</h2>
              </Link>
          )
      })}
  </div>;
};

export default CharacterList;
