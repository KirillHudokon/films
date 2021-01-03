import {useState} from 'react'
import styles from '../styles/main.module.scss'
import {connect} from 'react-redux'
import {dispatchResetError,searchFilms, getFilms} from '../actions'
import Films from './Films'
import SearchField from '../components/SearchField'
import ActionsBar from './ActionsBar'
import DragFile from './DragFile'
import {showToast} from '../utils/showToast'
function Main({error,dispatchResetError ,searchFilms, getFilms}) {
  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <form>
                <SearchField getAll={getFilms} searchFilms={()=>text=>searchFilms('stars', text)} label='stars'/>
                <SearchField getAll={getFilms} searchFilms={()=>text=>searchFilms('title', text)} label='title'/>
            </form>
            <section>
                <ActionsBar/>
                <Films/>
                <DragFile/>
            </section>
        </div>
        {error && showToast(error, dispatchResetError, 'error', error)}
    </main>
  );
}

const mapStateToProps = store => ({
  error: store.films.error
});
const mapDispatchToProps = {
  dispatchResetError,
  searchFilms,
  getFilms
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
