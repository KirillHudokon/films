import {useState} from 'react'
import styles from '../styles/actions.module.scss'
import Action from './Action'
import Modal from './Modal'
import AddNew from './AddNew'
function ActionsBar() {
  const [isModalOpen, setModalVisibility] = useState(false)
  const changeModalVisibility = () => setModalVisibility(!isModalOpen)
  const renderModal = () => {
    return isModalOpen ? <Modal changeModalVisibility={changeModalVisibility}>
        <AddNew/>
    </Modal> : null
  }
  return (
   <>   
        <div className={styles.actions}>
            <Action label="Filter" value="Sort A-Z" action={()=>console.log(1)}/>
            <Action label="Add new" value="+" action={changeModalVisibility}/>
        </div>
        {renderModal()}
    </>
  );
}

export default ActionsBar;
