import styles from '../styles/main.module.scss'
import SearchField from './SearchField'
function Main() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <form>
                <SearchField label='author'/>
                <SearchField label='film'/>
            </form>
        </div>
    </main>
  );
}

export default Main;
