import { Divider } from '@material-ui/core'
import ReactDOM from 'react-dom'
import styles from '../styles/modal.module.scss'
function Modal({children, changeModalVisibility}){
    return ReactDOM.createPortal(
        <>
            <div className={styles.modalBg} onClick={changeModalVisibility}/>
            <div className={styles.modal}>
                {children}
            </div>
        </>
        , document.getElementById('root')
    )
}
export default Modal