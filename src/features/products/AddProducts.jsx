import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts, updateProducts } from "./productSlice";
import { nanoid } from "nanoid";

const AddProducts = ({ productToEdit, isEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        title: productToEdit.title,
        description: productToEdit.description,
        category: productToEdit.category,
        price: productToEdit.price,
      });
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateProducts({ id: productToEdit.id, product: formData }));
    } else {
      dispatch(addProducts({ ...formData, id: nanoid() }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{isEdit ? "Update" : "Submit"}</button>
    </form>
  );
};

export default AddProducts;
