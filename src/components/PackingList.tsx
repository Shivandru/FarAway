import Item from "./Item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems?.map((el) => (
          <Item item={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
