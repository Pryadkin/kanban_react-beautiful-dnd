
// export interface ITask {
//     title: string,
//     assign: {
//         userName: string,
//         userId: string
//     }
// }

export interface IStage {
    id: string,
    order: number,
    title: string,
    tasks: ITask[]
}

export interface KanbanStagesState {
    stages: IStage[]
}

export interface ITask {
    taskId: string,
    title: string,
    description: string
}

export interface IColumn {
    id: string,
    taskIds: string[],
    title: string,
}