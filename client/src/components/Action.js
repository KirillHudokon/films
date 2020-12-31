import styles from '../styles/action.module.scss'
import Label from './Label'
function Action({label, value, action}) {
  return (
    <div className={styles.actions}>
        <Label label={label}>
            <input type="button" value={value} onClick={action}/>
        </Label>
    </div>
  );
}

export default Action;