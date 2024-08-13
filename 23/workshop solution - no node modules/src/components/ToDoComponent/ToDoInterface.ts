export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
  
    setComplete?(id: number): any;
    setDelete?(id: number): void;
  }