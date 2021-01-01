import {useState, useReducer} from 'react'
import styles from '../styles/addnew.module.scss'
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { useAddNewStyles } from '../utils/hooks';
const initialState = {
    title: '',
    format: '',
    releaseYear: '',
    stars: ''
}
const SET_NEW_INFO = 'SET_NEW_INFO'
function reducer(state, action) {
    switch (action.type) {
      case SET_NEW_INFO:
        return {...state, [action.payload.name]: action.payload.value};
      default:
        throw new Error();
    }
  }
function AddNew() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [errors, setErrors] = useState([])
  const classes = useAddNewStyles();
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  const check = () => {
    const validation = {
        title(val){
            if(val.length < 4){
                return {
                    name: 'title', 
                    message: 'not valid, length must be > 4'
                }
            }
        },
        format(val){
            const newVal = val.toLowerCase()
            if(newVal !== 'vhs' && val !== 'dvd' && val !== 'blu-ray'){
                return {
                    name : 'format',
                    message: 'unknown format'
                }
            }
        },
        releaseYear(val){
            if(isNaN(val)){
                return {
                    name: 'releaseYear',
                    message : 'release year must be a number'
                }
            }
            if(val.length < 4){
                return {
                    name: 'releaseYear',
                    message : 'not valid, length must be > 4'
                }
            }
        },
        stars(val){
            if(val.length < 3){
                return {
                    name: 'stars',
                    message : 'not valid, length must be > 3'
                }
            }
        }
    }
    setErrors(Object.entries(state).map(info => validation[info[0]](info[1])).filter(filteredInfo=>filteredInfo))
  }
  const sumbit = () => {
      check()
  }
  const renderFields = () => {
    return Object.keys(initialState).map(field=>{
        const error = errors.find(fieldError=> fieldError.name === field)
        return <div className={styles.field}>
            <TextField 
                error={error} 
                name={field}
                required
                id={error ? "outlined-error-helper-text" : "standard-required"}
                variant="outlined" 
                label={field}
                onChange={(e)=>{
                    dispatch({
                        type: SET_NEW_INFO,
                        payload: {
                            name: field,
                            value: e.target.value
                        }
                    })
                }}
                value={state[field]}
                autoComplete="off"
                fullWidth={true}
                defaultValue=""
                helperText={error?.message ?? ""}
            />
        </div>
    })
  }
  return (
   <form className={styles.form}>    
      <div className={styles.formTitleContainer}>
          <h3 className={styles.formTitle}>Add new film</h3> 
      </div>   
      <div className={styles.fieldContainer}>
          {renderFields()}
      </div>
      <div className={styles.buttonContainer}>
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary" className={classes.root} onClick={sumbit}>
                Add new 
            </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}

export default AddNew;