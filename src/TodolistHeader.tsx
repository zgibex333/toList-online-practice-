import React from 'react';

type propType = {
    title : string
}

const TodolistHeader: React.FC<propType> = ({title}) => {
    return <h3>{title}</h3>
};

export default TodolistHeader;