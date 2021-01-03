import styles from '../styles/app.module.scss'
import Header from './Header'
import Main from '../containers/Main'
function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
