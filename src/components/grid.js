import React from 'react';
import '../assets/styles/grid.css';

const Row = (props) => {
    return (
        <div className='row'>
            {props.children}
        </div>
    )
}


const Col = (props) => {
    const { span } = props
    return (
        <div className={`column column--${span}`}>
            {props.children}
        </div>
    )
}

export {
    Row,
    Col
};