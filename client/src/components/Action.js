import styles from '../styles/action.module.scss'
import Label from './Label'
import Button from '@material-ui/core/Button';
import { useActionStyles } from '../utils/hooks';
function Action({label, value, action}) {
const classes = useActionStyles()
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