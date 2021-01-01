import styles from '../styles/films.module.scss'
import Film from './Film'
const films = [
    {
        "id": 1,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 2,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 3,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 4,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 5,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
    {
        "id": 6,
        "Title": "Blazing Saddles",
        "Release Year": 1974,
         Format: "VHS",
        "Stars": "Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn",      
    },
]
function Films() {
    const renderFilms = () => {
        return films.map(film => <Film key={film.id} film={film}/>)
    }
    return (
        <div className={styles.films}>
            {renderFilms()}
        </div>
    );
}

export default Films;
