import { useCharactersDispatch } from "../../characters-context";


import styles from './card.module.css';

function Card({ id, health, attack, defense, image }) {
  const dispatch = useCharactersDispatch();
  // console.log(`Card ${id}`, { health, attack, defense });

  function handleCharacterRemove() {
    dispatch({ type: 'delete', payload: { id } })
  }

  function handleCharacterChange(payload) {
    dispatch({ type: 'update', payload });
  }

  return (
    <div className={styles.root}>
      <div>
        <img className={styles.characterImage} src={image.url} />
      </div>

      <button className={styles.removeBtn} onClick={handleCharacterRemove}>X</button>

      <div className={styles.cardActions}>
        <div>
          <div>Health {health}</div>

          <div>
            <button className={styles.decrement} onClick={() => handleCharacterChange({ id, health: health - 1, attack, defense })}>-</button>
            <button className={styles.increment} onClick={() => handleCharacterChange({ id, health: health + 1, attack, defense })}>+</button>
          </div>
        </div>

        <div>
          <div>Attack {attack}</div>

          <div>
            <button className={styles.decrement} onClick={() => handleCharacterChange({ id, health, attack: attack - 1, defense })}>-</button>
            <button className={styles.increment} onClick={() => handleCharacterChange({ id, health, attack: attack + 1, defense })}>+</button>
          </div>
        </div>

        <div>
          <div>Defense {defense}</div>

          <div>
            <button className={styles.decrement} onClick={() => handleCharacterChange({ id, health, attack, defense: defense - 1 })}>-</button>
            <button className={styles.increment} onClick={() => handleCharacterChange({ id, health, attack, defense: defense + 1 })}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
// export default memo(Character); // could be memoized if we need to optimize re-rednerings of individual list items