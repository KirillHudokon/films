import {useState} from 'react'
import {connect} from 'react-redux'
import {sortFilmsAlphabetically} from '../actions/'
import styles from '../styles/actions.module.scss'
import Action from './Action'
import Modal from './Modal'
import AddFilm from './AddFilm'
function ActionsBar({sortFilmsAlphabetically}) {
  const [isModalOpen, setModalVisibility] = useState(false)
  const changeModalVisibility = () => setModalVisibility(!isModalOpen)
  const renderModal = () => {
    return isModalOpen ? <Modal changeModalVisibility={changeModalVisibility}>
        <AddFilm closeModal={changeModalVisibility}/>
    </Modal> : null
  }
  return (
   <>   
        <div className={styles.actions}>
            <Action label="Filter" value="Sort A-Z" action={sortFilmsAlphabetically}/>
            <Action label="Add new" value="+" action={changeModalVisibility}/>
        </div>
        {renderModal()}
    </>
  );
}
const mapDispatchToProps = {
  sortFilmsAlphabetically
}
export default connect(null, mapDispatchToProps)(ActionsBar);
