import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoAtoms';

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="mb-4">
      <select
        value={filter}
        onChange={updateFilter}
        className="border p-2 rounded"
      >
        <option value="Show All">Todas</option>
        <option value="Show Completed">Concluídas</option>
        <option value="Show Uncompleted">Pendentes</option>
      </select>
    </div>
  );
}