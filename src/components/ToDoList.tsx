import { useState } from 'react';

function ToDoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input, done: false }]);
    setInput('');
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 입력"
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={addTodo}>
        추가
      </button>

      {todos.map((todo, i) => (
        <div key={i} className="mt-2">
          <span className={todo.done ? 'line-through' : ''}>
            {todo.text}
          </span>
          <button
            className="ml-2 text-green-600"
            onClick={() =>
              setTodos(todos.map((t, j) =>
                i === j ? { ...t, done: !t.done } : t
              ))
            }
          >
            완료
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
