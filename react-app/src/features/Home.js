import React from "react";
import Product from "./Product/index";
// import { AddForm } from "./Product/AddForm";
// import axios from "axios";
import styled from "styled-components";
import PropTypes from "prop-types";

// let currentProductId = 9;

function Home({ className, products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     const products = await axios.get(
  //       'https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a'
  //     );
  //     setProducts(products.data);
  //   }

  //   getProducts();
  // }, []);

  // function addProduct(product) {
  //   const newProduct = { id: ++currentProductId, ...product };
  //   setProducts([...products, newProduct]);
  // }

  return (
    <div className={className}>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;

// export { Home };
