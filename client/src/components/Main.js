import styles from '../styles/main.module.scss'
import Films from './Films'
import SearchField from './SearchField'
import Actions from './Actions'
function Main() {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <form>
                <SearchField label='author'/>
                <SearchField label='film'/>
            </form>
            <section>
                <Actions/>
                <Films/>
            </section>
        </div>
    </main>
  );
}

export default Main;
