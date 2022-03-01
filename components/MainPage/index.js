import React from 'react';
import styles from './MainPage.module.css';
import DonateButton from '../DonateButton';

// I was thinking something like this: https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg

const MainPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexItem}>
                <div className={styles.leftPanel}>
                    <h1 className={styles.title}>Welcome to Peter Cooper Trading</h1>
                    <p>Peter Cooper Trading is an investment fund associated with the Cooper Union FinTech club. This fund aims to serve as an educational experience for students who are interested in financial technology.</p>
                    <DonateButton></DonateButton>
                </div>
            </div>
            <div className={styles.flexItem}><img style={{ width: '100%' }} src=' https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/602f2109a787c146dcbe2b66_601b1c1f7567a7399353fe47_traackr.jpeg'></img></div>
        </div>
    )
}

export default MainPage;