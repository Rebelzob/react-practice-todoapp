import InputTodo from './ImputTodo';
import TodoList from './TodoList';
/* eslint-disable-next-line */
function TodoBody() {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoBody;
