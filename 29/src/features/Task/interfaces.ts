export interface TaskBase {
    id?: number;
    userId?: number;
}

export interface Task extends TaskBase {
    title: string;
    completed: boolean;
}


export interface TaskData {
    tasks: Task[]
    
}
