import { useCharactersState } from "../characters-context";
import Card from "./card";

function CharactersGrid() {
  const characters = useCharactersState();
  console.log('CharactersGrid', characters);

  return (
    <div>
      {characters.map(data => <Card key={data.id} {...data} />)}
    </div>
  );
}


export default CharactersGrid;