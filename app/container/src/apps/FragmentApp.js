import React from 'react';
const App = React.lazy(() => import('fragment/FragmentApp'));

function FragmentApp() {
    return (
        <div>
            <App />
        </div>
    )
}

export default FragmentApp