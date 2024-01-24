import { useCharactersDispatch } from './characters-context';

function ActionsBar() {
  const dispatch = useCharactersDispatch();
  console.log('ActionsBar');

  function handleAddClick() {
    dispatch({ type: 'create', payload: { id: Math.random(), health: 0, attack: 0, defense: 0 } });
  }

  function handleAttackAllClick() {
    dispatch({ type: 'attackAll' });
  }

  return (
    <div>
      <button onClick={handleAddClick}>Add character</button>
      <button onClick={handleAttackAllClick}>Attack all characters</button>
    </div>
  );
}

export default ActionsBar;