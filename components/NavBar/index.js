import React from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            Home | About Us | Donate
        </div>
    )
}

export default Navbar;