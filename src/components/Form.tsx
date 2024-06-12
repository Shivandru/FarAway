import { useState } from "react";
import { useForm } from "react-hook-form";
type FormType = {
  quantity: number;
  item: string;
  packed: boolean;
  time: string;
};
const Form = () => {
  const [description, setDescription] = useState<FormType | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormType>();
  function onSubmitForm(data: FormType) {
    setDescription({
      ...data,
      packed: false,
      time: new Date().toLocaleString(),
    });
    reset();
  }
  console.log(description);
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="add-form">
      <h3>What do you need for the 😍 trip?</h3>
      <select
        {...register("quantity", {
          required: "Please enter a quantity",
          min: {
            value: 1,
            message: "Please enter a quantity greater than 0",
          },
        })}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      {errors.quantity && <p>{errors.quantity.message}</p>}
      <input
        type="text"
        placeholder="Add an item"
        {...register("item", {
          required: "Please enter an item",
        })}
      />
      {errors.item && <p>{errors.item.message}</p>}
      <button disabled={isSubmitting} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
