import { IColumn, ITask } from '../../types'
import styles from './Column.module.scss'

interface Props {
    column: IColumn,
    tasks: (ITask | undefined)[]
}

export const Column = ({
    column,
    tasks,
}: Props) => {

    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>
                {column.title}
            </span>
            {/* <div 
                className={styles.addTaskBtn}
                // onClick={handleAddTaskClick}
            >
                add task
            </div> */}
            {tasks.map((task, index) => (
                <div 
                    key={index}
                    className={styles.task}
                >
                    <div>{task && task.title}</div>
                    <div className={styles.assign}>{task && task.description}</div>
                </div>
            ))}
        </div>
    )
}