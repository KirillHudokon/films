import {useState, useReducer} from 'react'
import {connect} from 'react-redux'
import styles from '../styles/addnew.module.scss'
import TextField from '@material-ui/core/TextField';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { useAddNewStyles } from '../utils/hooks';
import {addFilm} from '../actions'
import {textValues} from '../utils/textValues'
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
function AddFilm({addFilm, closeModal}) {
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
            if(newVal !== 'vhs' && newVal !== 'dvd' && newVal !== 'blu-ray'){
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
            if(val<1850 || val>2020){
                return {
                    name: 'releaseYear',
                    message : 'not valid, value must be >= 1850 and <= 2020'
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
            if([...new Set(val.split(',').map(field=> field.trim().toLowerCase()))].length !== val.split(',').map(field=> field.trim().toLowerCase()).length){
                return {
                    name: 'stars',
                    message : 'not valid, please remove same stars'
                }
            }
        }
    }
    const filterErrors = Object.entries(state).map(info => {
        if(typeof info[1] !== 'number'){
            return  validation[info[0]](info[1].trim())
        }
        return validation[info[0]](info[1])
    }).filter(filteredInfo=>filteredInfo)
    setErrors(filterErrors)
    return filterErrors
  }
  const sumbit = () => {
      const savedErrors = check()
      if(!savedErrors.length){
        addFilm(state)
        closeModal()
      }
  }
  const renderFields = () => {
    return Object.keys(initialState).map(field=>{
        const error = errors.find(fieldError=> fieldError.name === field)
        return <div className={styles.field} key={field}>
            <TextField 
                required
                error={error} 
                name={field}
                type={field === "releaseYear" ? "number" : "text"}
                id={error ? "outlined-error-helper-text" : "standard-required"}
                variant="outlined" 
                label={textValues[field]}
                onChange={(e)=>{
                    dispatch({
                        type: SET_NEW_INFO,
                        payload: {
                            name: field,
                            value:  field === "releaseYear" ? Number(e.target.value) : e.target.value 
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
                Add film 
            </Button>
        </ThemeProvider>
      </div>
    </form>
  );
}
const mapDispatchToProps = {
    addFilm
}
export default connect(null, mapDispatchToProps)(AddFilm);
