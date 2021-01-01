import {useEffect} from 'react'
import styles from '../styles/films.module.scss'
import {connect} from 'react-redux'
import {getFilms} from '../actions/'
import Film from './Film'
function Films({filmsData, getFilms}) {
    useEffect(()=>{
        getFilms()
    }, [getFilms])
    const renderFilms = () => {
        if(filmsData.loading){
            return <div className={styles.filmsInfo}>
                Loading...
            </div>
        }
        if(!filmsData.films.length){
            return <div className={styles.filmsInfo}>
                No available films
            </div>
        }
        return filmsData.films.map(film => <Film key={film.id} film={film}/>)
    }
    return (
        <div className={styles.films}>
            {renderFilms()}
        </div>
    );
}
const mapStateToProps = store => ({
    filmsData: store.films
  });
  const mapDispatchToProps = {
     getFilms
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Films);
