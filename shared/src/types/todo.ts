export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type CreateTodoDto = Omit<Todo, 'id'>;
