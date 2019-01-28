
export interface Todo {
    id?: number;
    title: string;
    text: string;
    state: TaskState;
}

export enum TaskState {
    todo = 'To Do',
    inProgress = 'In Progress',
    done =  'Done',
}
