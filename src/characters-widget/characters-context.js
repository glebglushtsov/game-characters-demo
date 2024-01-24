import { createContext, useContext, useReducer } from 'react';

const CharactersStateContext = createContext([]);
const CharactersDispatchContext = createContext(null);

function CharactersProvider({ initialValue = [], children }) {
  const [state, dispatch] = useReducer(charactersReducer, initialValue);

  return (
    <CharactersStateContext.Provider value={state}>
      <CharactersDispatchContext.Provider value={dispatch}>
        {children}
      </CharactersDispatchContext.Provider>
    </CharactersStateContext.Provider>
  );
}

function charactersReducer(state, action) {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case 'create':
      return [...state, payload];

    case 'update':
      return state.map(character => character.id === payload.id ? { ...character, ...payload } : character);

    case 'delete':
      return state.filter(character => character.id !== payload.id);

    case 'attackAll':
      return state.map(character => ({ ...character, health: 0 }));

    default:
      console.error('unknown action');

      return state;
  }
}

function useCharactersState() {
  return useContext(CharactersStateContext);
}

function useCharactersDispatch() {
  return useContext(CharactersDispatchContext);
}

export { CharactersProvider, charactersReducer, useCharactersState, useCharactersDispatch };