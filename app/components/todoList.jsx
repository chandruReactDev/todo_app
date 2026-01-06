'use client';

// import { toggleTodo, deleteTodo } from '@/app/actions';

export default function TodoList({ todos }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center border p-2"
        >
          <span
            // onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.title}
          </span>

          <button
            // onClick={() => deleteTodo(todo.id)}
            className="text-red-500"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
