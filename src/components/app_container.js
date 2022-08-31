import React from 'react';
import '../assets/styles/main.css';

const AppContainer = (props) => {
    return (
        <div className='app--container'>
            {props.children}
        </div>
    )
}
export default AppContainer;