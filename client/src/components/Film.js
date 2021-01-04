import {useState, useRef} from "react"
import styles from "../styles/film.module.scss";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {textValues} from '../utils/textValues'
function Film({film, deleteFilm}) {
    const [isOpen, setVisibility] = useState(true);
    const changeVisibility = (e) =>{
       setVisibility(!isOpen) 
    } 
    const ref = useRef(null)
    const renderButton = () => {
        return <Button variant="outlined" fullWidth={true} onClick={changeVisibility}>
            {isOpen ? "Close" : "Open"}
        </Button>
    }
    const renderFilmInfo = () => {
        const filmInfo = Object.entries(film).map(info => {
            if(info[0] !== '_id' && info[0] !== '__v'){
                return <div key={`${film.id} - ${info[0]} : ${info[1]}`} className={styles.filmInfo}>
                    {`${textValues[info[0]]} : ${info[1]}`}
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
      <div className={styles.film} ref={ref}>
            <header className={styles.filmHeader}>
                <h3 className={styles.filmTitle}>
                    id: {film._id}
                </h3>
                <div className={styles.deleteFilm} onClick={()=>{
                    const nowPos = window.scrollY
                    setTimeout(()=>{
                        window.scroll(0,nowPos) 
                    },300)
                    deleteFilm(film)
                }}>
                    <DeleteIcon/>
                </div>
            </header>
            <main className={styles.filmContainer}>
                <div className={styles.filmInfoVisibilityController}>
                    {renderButton()}
                </div>               
                {renderFilmInfo()}             
            </main>
      </div>
    );
  }
  
  export default Film;