export interface todoModel {
  id: number;
  title: string;
  description: string;
  date: string;
  done: boolean;
}

export interface newTodoModel {
  title: string;
  description: string;
}

export interface editTodoModel {
  id: number;
  title: string;
  description: string;
}
