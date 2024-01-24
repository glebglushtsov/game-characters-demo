import { v4 as uuidv4 } from 'uuid';

import { useCharactersDispatch } from '../characters-context';
import { images } from "../images";

import styles from './actions-bar.module.css';

function ActionsBar() {
  const dispatch = useCharactersDispatch();
  console.log('Controls');

  function handleAddClick() {
    dispatch({ type: 'create', payload: { id: uuidv4(), health: 0, attack: 0, defense: 0, image: images[Math.floor(Math.random() * 3)] } });
  }

  function handleAttackAllClick() {
    dispatch({ type: 'attackAll' });
  }

  return (
    <div className={styles.root}>
      <button onClick={handleAddClick}>Add character</button>
      <button onClick={handleAttackAllClick}>Attack all characters</button>
    </div>
  );
}

export default ActionsBar;