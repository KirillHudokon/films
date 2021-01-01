import CloseIcon from '@material-ui/icons/Close';
import ReactDOM from 'react-dom'
import styles from '../styles/modal.module.scss'
function Modal({children, changeModalVisibility}){
    return ReactDOM.createPortal(
        <>
            <div className={styles.modalBg} onClick={changeModalVisibility}/>
            <div className={styles.modal}>
                <div className={styles.close} onClick={changeModalVisibility}>
                    <CloseIcon/> 
                </div> 
                {children}
            </div>
        </>
        , document.getElementById('root')
    )
}
export default Modal