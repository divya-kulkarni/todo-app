import "./App.css";
import { useDispatchApp, useAppSelector } from "./app/hooks";
import { addTodo, toggleTodo } from "./features/todoSlice";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const todoList = useAppSelector((state) => state.todo.todos);
  const dispatch = useDispatchApp();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements[0] as HTMLInputElement;
    dispatch(addTodo(input.value));
    input.value = "";
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        {todoList.map((todo: Todo) => (
          <div key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {todo.text}
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </>
  );
}

export default App;
