import { React, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router";
import { updateProduct, deleteProduct } from "./actions";

export default function UpdateForm() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  console.log(products, id);
  const product = products.find((product) => product.id === Number(id));

  const [name, setName] = useState(product.name);
  const [type, setType] = useState(product.type);
  const [imageURL, setImageURL] = useState(product.imageURL);

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(id);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct({ id: product.id, name, imageURL, type}));
    history.push("/");
  };

  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    history.push("/");
  };

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
          />
        </div>

        <div className=" input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>

        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={onDelete}
        >
          Delete restaurant
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
}
