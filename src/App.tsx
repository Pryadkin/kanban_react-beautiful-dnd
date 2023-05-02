import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './App.css'
import { Column } from './components/Column'
import { IColumn, ITask } from './types'
import {Droppable} from 'react-beautiful-dnd';

function App() {
    const [count, setCount] = useState(0)
    const columnOrder = [0, 1]
    const columns: IColumn[] = [
        {
            id: 'col_1',
            taskIds: ['id_1', 'id_2'],
            title: 'todo',
        },
        {
            id: 'col_1',
            taskIds: ['id_3', 'id_4', 'id_5'],
            title: 'todo',
        },
    ]

    const tasks: ITask[] = [
        {
            taskId: 'id_1',
            title: 'title_1',
            description: 'description_1'
        },
        {
            taskId: 'id_2',
            title: 'title_2',
            description: 'description_2'
        },
        {
            taskId: 'id_3',
            title: 'title_1',
            description: 'description_1'
        },
        {
            taskId: 'id_4',
            title: 'title_2',
            description: 'description_2'
        },
        {
            taskId: 'id_5',
            title: 'title_3',
            description: 'description_3'
        },
    ]

    return (
        <div

        >
            {columnOrder.map((columnId) => {
                const column = columns[columnId];
                const currentTasks = column?.taskIds.map(taskId => {
                    return tasks.find(task => task.taskId === taskId)
                });
                // if (currentTasks) {
                    return <Column key={column.id} column={column} tasks={currentTasks} />
                // }
            })}
        </div>
    )
}

export default App
