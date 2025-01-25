import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Логотип</div>
      <nav className={styles.nav}>
        <a href="#about" className={styles.link}>Про нас</a>
        <a href="#services" className={styles.link}>Послуги</a>
        <a href="#team" className={styles.link}>Наша команда</a>
        <a href="#donors" className={styles.link}>Донори</a>
        <a href="#news" className={styles.link}>Новини</a>
        <a href="#media" className={styles.link}>Медіа</a>
        <a href="#footer" className={styles.link}>Контакти</a>
      </nav>
    </header>
  );
};

export default Header;