import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import Join from './components/Join/Join.js';

const App = () => {
    return (
        <HashRouter>
            <Route path = "/" exact component = {Join} />
        </HashRouter>
    );
};

export default App;