import Item from "./Item";
import { FormType } from "./Form";
type ItemListProps = {
  items: FormType[];
  handleDeleteItem: (id: number) => void;
  handleToggle: (id: number) => void;
};
const PackingList = ({
  items,
  handleDeleteItem,
  handleToggle,
}: ItemListProps) => {
  return (
    <div className="list">
      <ul>
        {items?.map((el) => (
          <Item
            item={el}
            key={el.id}
            handleDeleteItem={handleDeleteItem}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
