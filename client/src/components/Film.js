import {useState} from "react"
import styles from "../styles/film.module.scss";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
function Film({film}) {
    const [isOpen, setVisibility] = useState(true);
    const changeVisibility = () => setVisibility(!isOpen)
    const renderButton = () => {
        return <Button variant="outlined" fullWidth={true} onClick={changeVisibility}>
            {isOpen ? "Закрыть" : "Посмотреть"}
        </Button>
    }
    const renderFilmInfo = () => {
        const filmInfo = Object.entries(film).map(info => {
            if(info[0] !== 'id'){
                return <div key={film.id} className={styles.filmInfo}>
                    {`${info[0]} : ${info[1]}`}
                </div>
            }
        })
        return isOpen ? (
            <section className={styles.filmInfoContainer}>
                    {filmInfo}
            </section>
        ) : null
    }
    return (
      <div className={styles.film}>
            <header className={styles.filmHeader}>
                <h3 className={styles.filmTitle}>
                    id: {film.id}
                </h3>
                <div className={styles.deleteFilm}>
                    <DeleteIcon/>
                </div>
            </header>
            <main className={styles.filmInfoContainer}>
                <div className={styles.filmInfoVisibilityController}>
                    {renderButton()}
                </div>               
                {renderFilmInfo()}             
            </main>
      </div>
    );
  }
  
  export default Film;