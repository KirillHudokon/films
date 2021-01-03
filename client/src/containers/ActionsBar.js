import {useState} from 'react'
import {connect} from 'react-redux'
import {sortFilms} from '../actions'
import styles from '../styles/actions.module.scss'
import Action from '../components/Action'
import Modal from '../components/Modal'
import AddFilm from './AddFilm'
function ActionsBar({sortFilms}) {
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
            <Action label="Filter" value="Sort A-Z" action={sortFilms}/>
            <Action label="Add new" value="+" action={changeModalVisibility}/>
        </div>
        {renderModal()}
    </>
  );
}
const mapDispatchToProps = {
  sortFilms
}
export default connect(null, mapDispatchToProps)(ActionsBar);
