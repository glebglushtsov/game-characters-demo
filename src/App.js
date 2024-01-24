import CharactersWidget from './characters-widget';

import styles from './app.module.css';

function App() {
  // console.log('App');
  return (
    <div className={styles.root}>
      <CharactersWidget/>
    </div>
  );
}

export default App;
