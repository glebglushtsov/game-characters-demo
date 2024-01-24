import { useCharactersState } from "../characters-context";
import Card from "./card";

import styles from './characters-grid.module.css';

function CharactersGrid() {
  const characters = useCharactersState();
  // console.log('CharactersGrid', characters);

  return (
    <div className={styles.root}>
      {characters.map(data => <Card key={data.id} {...data} />)}
    </div>
  );
}


export default CharactersGrid;