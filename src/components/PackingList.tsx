import Item from "./Item";
import { FormType } from "./Form";
type ItemListProps = {
  items: FormType[];
  handleDeleteItem: ( id : number) => void;
};
const PackingList = ({ items, handleDeleteItem }: ItemListProps) => {
  return (
    <div className="list">
      <ul>
        {items?.map((el) => (
          <Item item={el} key={el.id} handleDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
