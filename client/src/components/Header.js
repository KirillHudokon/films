import styles from '../styles/header.module.scss'

function Header() {
    return (
      <header className={styles.header}>
          <div className={styles.logoContainer}>
              <h1 className={styles.logo}>
                  Films info
              </h1>
          </div>
      </header>
    );
}
  
  export default Header;
  