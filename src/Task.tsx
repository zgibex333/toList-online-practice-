import React from 'react';
import {TaskType} from "./App";



type propsSingleTaskType = TaskType & {
    removeTask: (taskId:string)=>void
    changeTaskStatus: (task: string, isDone: boolean) => void
}

const Task: React.FC<propsSingleTaskType> = ({id, isDone, title, removeTask, changeTaskStatus }) => {
    return (
        <li className={isDone ? 'isDone' : ''}><input type="checkbox" checked={isDone} onChange={(e)=>changeTaskStatus(id, e.currentTarget.checked)}/>
            <span>{title}</span>
            <button onClick={()=>removeTask(id)}>X</button>
        </li>
    );
};

export default Task;