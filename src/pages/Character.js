import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharater";

const Character = () => {
    const { id } = useParams()
  const { data, loading, error } = useCharacter(id);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong!</div>;




  return (
    <div>
      <img src={data.character.image} alt="" />
      <h2>{data.character.name}</h2>
      <p>{data.character.gender}</p>
      <div>
        {data.character.episode.map((episode) => {
          return (
            <div key={data.character.episode.indexOf(episode)}>
              {episode.name}: {episode.episode}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
