import {useEffect} from 'react'
import styles from '../styles/films.module.scss'
import {connect} from 'react-redux'
import {getFilms, deleteFilm} from '../actions/'
import Film from './Film'
function Films({films, loading, getFilms, deleteFilm}) {
    useEffect(()=>{
        getFilms()
    }, [getFilms])
    const renderFilms = () => {
        if(loading){
            return <div className={styles.filmsInfo}>
                Loading...
            </div>
        }
        if(!films.length){
            return <div className={styles.filmsInfo}>
                No available films
            </div>
        }
        return films.map(film => <Film key={film._id} deleteFilm={deleteFilm} film={film}/>)
    }
    return (
        <div className={styles.films}>
            {renderFilms()}
        </div>
    );
}
const mapStateToProps = store => ({
    loading: store.films.loading,
    films: store.films.films
});
const mapDispatchToProps = {
    getFilms,
    deleteFilm
}
  export default connect(mapStateToProps, mapDispatchToProps)(Films);
