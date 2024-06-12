import { FormType } from "./Form";
export type ItemProps = {
  item: FormType;
  handleDeleteItem: (id: number) => void;
};
const Item = ({ item, handleDeleteItem }: ItemProps) => {
  return (
    <li key={item.id}>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.item}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
