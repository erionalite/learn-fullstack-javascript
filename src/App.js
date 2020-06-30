import React from 'react';
import { MyHeader } from './MyHeader';
export const App = (prop) => {
    return (
        <div>
            <MyHeader prop="header" />
            <div>...</div>
        </div>
    );
};
export default App;