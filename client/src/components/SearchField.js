import TextField from '@material-ui/core/TextField';
import searchHoc from '../hoc/searchHoc'
import styles from '../styles/search.module.scss'
function SearchField({
    label,
    value,
    changeValue
}){
    return(
        <div className={styles.searchField}>
            <TextField
                id="outlined-search"
                type="search" 
                variant="outlined" 
                label={`Search by ${label}`}
                onChange={changeValue}
                value={value}
                autoComplete="off"
                fullWidth={true}
             />
        </div>
    )
}

export default searchHoc(SearchField)