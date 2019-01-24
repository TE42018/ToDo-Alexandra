

export interface Task{
    title: string;
    description: string;
    deadline: Date;
    state: 'To Do'| 'In Progress'| 'Done';
  }