import React from 'react';
import styles from './styles/container.module.css';

function Container({ children }) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {children}
                <div className={styles.con}>
                    <p>Container</p>
                </div>
            </div>
        </div>
    )
}

export default Container