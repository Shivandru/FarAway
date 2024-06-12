import { FormType } from "./Form";
type ItemProp = {
  items: FormType[];
};
const Stats = ({ items }: ItemProp) => {
  const totalItem = items.length;
  console.log(totalItem);
  return (
    <footer className="stats">
      <em>You have {totalItem} items on your list.</em>
    </footer>
  );
};

export default Stats;
