import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((todo) =>
        todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const deleteItem = () => {
    setTodoList((oldTodoList) => oldTodoList.filter((todo) => todo.id !== item.id));
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
          className="mr-2"
        />
        <span className={item.isComplete ? 'line-through' : ''}>{item.text}</span>
      </div>
      <button
        onClick={deleteItem}
        className="text-red-500 hover:text-red-700"
      >
        Remover
      </button>
    </div>
  );
}