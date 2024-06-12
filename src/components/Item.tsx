import { FormType } from "./Form";
export type ItemProps = {
  item: FormType;
  handleDeleteItem: (id: number) => void;
  handleToggle: (id: number) => void;
};
const Item = ({ item, handleDeleteItem, handleToggle }: ItemProps) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          handleToggle(item.id);
        }}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.item}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
