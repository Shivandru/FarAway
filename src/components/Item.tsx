type ItemProp = {
  item: {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  };
};
const Item = ({ item }: ItemProp) => {
  return (
    <li key={item.id}>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;
