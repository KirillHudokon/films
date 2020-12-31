import styles from '../styles/action.module.scss'
import Label from './Label'
import Button from '@material-ui/core/Button';
import { useStyles } from '../utils/hooks';
function Action({label, value, action}) {
const classes = useStyles()
  return (
    <div className={styles.actions}>
        <Label label={label}>
            <Button className={classes.root} variant="outlined" onClick={action}>
                {value}
            </Button>
        </Label>
    </div>
  );
}

export default Action;