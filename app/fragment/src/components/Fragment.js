import React from 'react';
import styles from './styles/fragment.module.css';

function Fragment({ bg_color, bd_color }) {
    return (
        <div className={styles.frag_root} style={{ backgroundColor: bg_color, borderColor: bd_color }}>
            <p>
                Fragment
            </p>
        </div>
    )
}

export default Fragment