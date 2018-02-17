import { Commnet, Todo};
export class Comment {
  id: Number;
  text: string;
}

export class Todo {
  title: string;
  comments : Comment[];
}

export class Todos {
    todos : Todo[];
}
