import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim()) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: Date.now(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    }
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className="border p-2 mr-2 rounded"
        placeholder="Digite uma tarefa..."
      />
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Adicionar
      </button>
    </div>
  );
}