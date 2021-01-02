import {useState} from 'react'
import styles from '../styles/main.module.scss'
import {connect} from 'react-redux'
import Films from './Films'
import SearchField from './SearchField'
import ActionsBar from './ActionsBar'
import DragFile from './DragFile'
import {showToast} from '../utils/showToast'
function Main({error}) {
  const [isOpen, setIsOpen] = useState(true);
  const closeSnackBar = () => setIsOpen(false)
  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <form>
                <SearchField label='author'/>
                <SearchField label='film'/>
            </form>
            <section>
                <ActionsBar/>
                <Films/>
                <DragFile/>
            </section>
        </div>
        {error && showToast(isOpen, closeSnackBar, 'error', error)}
    </main>
  );
}

const mapStateToProps = store => ({
  error: store.films.error
});
export default connect(mapStateToProps, null)(Main);
