import { useRecoilValue } from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import { filteredTodoListState } from '../selectors/todoSelectors';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold">Lista de Tarefas</h1>
      <TodoItemCreator />
      <TodoListFilters />
      <div>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </div>
    </div>
  );
}