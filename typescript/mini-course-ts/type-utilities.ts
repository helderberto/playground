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

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick specific fields
type TodoPreview = Pick<Todo, 'title' | 'description'>

const todo3: TodoPreview = {
  title: 'Upar Minecraft Dungeons',
  description: 'Lorem Ipsum'
};

console.log('todo3', todo3);

// Omit specific fields
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
  title: 'Lorem Ipsum',
  completed: true
};

console.log('todo4', todo4);
