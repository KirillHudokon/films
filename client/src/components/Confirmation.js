import styles from '../styles/confirmation.module.scss'
function Confirmation({action, closeModal}) {
  const actionWithClosingModal = () => {
      action()
      closeModal()
  }
  return (
    <div className={styles.confirmationContainer}>
        <div className={styles.confirmationTitle}>
            Are you sure?
        </div>
        <div className={styles.actionContainer}>
            <div className={styles.action}>
                <button className={`${styles.actionButton} ${styles.actionSuccess}`} onClick={actionWithClosingModal}>
                        Yes
                </button>
            </div>
            <div className={styles.action}>
                <button className={`${styles.actionButton} ${styles.actionClose}`} onClick={closeModal}>
                        No
                </button>
            </div>
        </div>
    </div>
  );
}

export default Confirmation;