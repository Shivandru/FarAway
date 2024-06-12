import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { FormType } from "./components/Form";
function App() {
  const [items, setItems] = useState<FormType[]>([]);

  function handleAddItems(item: FormType) {
    setItems((prevItems: FormType[]) => [...prevItems, item]);
  }
  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((el) => el.id !== id));
  }
  function handleToggle(id: number) {
    setItems((items) =>
      items?.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }
  return (
    <>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggle={handleToggle}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
