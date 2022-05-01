import React from 'react';
import { mount } from 'fragment/FragmentApp';
import styles from './styles/fragmentapp.module.css';
// const App = React.lazy(() => import('fragment/FragmentApp'));

function FragmentApp() {
    const appRef = React.useRef(null);

    React.useEffect(() => {
        mount(appRef.current);
    }, []);

    return (
        <div ref={appRef} className={styles.root} />
    )
}

export default FragmentApp