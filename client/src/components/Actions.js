import styles from '../styles/actions.module.scss'
import Action from './Action'
function Actions() {
  return (
    <div className={styles.actions}>
        <Action label="Filter" value="Sort A-Z" action={()=>console.log(1)}/>
        <Action label="Add new" value="+" action={()=>console.log(1)}/>
    </div>
  );
}

export default Actions;
