import { useCharactersDispatch } from "../../characters-context";

import styles from './card.module.css';

function Card({ id, health, attack, defense, image }) {
  const dispatch = useCharactersDispatch();
  console.log(`Character ${id}`, { health, attack, defense });

  function handleCharacterChange(payload) {
    dispatch({ type: 'update', payload });
  }

  function handleCharacterRemove() {
    dispatch({ type: 'delete', payload: { id } })
  }

  return (
    <div className={styles.cardRoot}>
      <div>
        <div>Health {health}</div>

        <button className={styles.cardRemoveBtn} onClick={handleCharacterRemove}>X</button>

        <div>
          <button onClick={() => handleCharacterChange({ id, health: health - 1, attack, defense })}>-</button>
          <button onClick={() => handleCharacterChange({ id, health: health + 1, attack, defense })}>+</button>
        </div>
      </div>

      <div>
        <div>Attack {attack}</div>

        <div>
          <button onClick={() => handleCharacterChange({ id, health, attack: attack - 1, defense })}>-</button>
          <button onClick={() => handleCharacterChange({ id, health, attack: attack + 1, defense })}>+</button>
        </div>
      </div>

      <div>
        <div>Defense {defense}</div>

        <div>
          <button onClick={() => handleCharacterChange({ id, health, attack, defense: defense - 1 })}>-</button>
          <button onClick={() => handleCharacterChange({ id, health, attack, defense: defense + 1 })}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;