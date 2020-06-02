type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false
};

console.log(todo);

// todo.completed = true; // Wrong! Causing mutation.

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const newTodo: Todo = updateTodo(todo, { completed: true });

console.log(newTodo);
