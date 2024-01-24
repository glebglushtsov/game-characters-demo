import ActionsBar from "./actions-bar";
import { CharactersProvider } from "./characters-context";
import CharactersGrid from "./characters-grid";

function CharactersWidget() {
  return (
    <CharactersProvider>
      <ActionsBar/>
      <CharactersGrid />
    </CharactersProvider>
  );
}

export default CharactersWidget;