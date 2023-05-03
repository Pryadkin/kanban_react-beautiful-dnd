import { Draggable } from 'react-beautiful-dnd';

import styles from './TaskCard.module.scss'

export const TaskCard = ({ item, index }: any) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.taskInformation}>
            <p>{item.Task}</p>
            <div className={styles.secondaryDetails}>
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString('en-us', {
                    month: 'short',
                    day: '2-digit',
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
