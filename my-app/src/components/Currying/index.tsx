import React from "react";
import { handleCartAction } from "./handleCartAction";

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <button onClick={handleCartAction("ADD")(product.id, 1)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.productId}>
          <h2>{item.productName}</h2>   
          <button onClick={handleCartAction("REMOVE")(item.productId, 1)}>
            Remove from Cart
          </button>
        </div>
      ))}
    </div>
  );
}

/**
 * 柯里化函数在高阶组件中的应用
 */
function withStyle(style) {
  return function (WrappedComponent) {
    return function (props) {
      return (
        <div style={style}>
          <WrappedComponent {...props} />
        </div>
      );
    };
  };
}

function customCmp(props) {
  return <div>这是{props?.text || '自定义'}组件</div>;
}

const withRedStyle = withStyle({ color: "red" })(customCmp);
const withBlueStyle = withStyle({ color: "blue" })(customCmp);

// console.log(`withRedStyle -- `, withRedStyle);
// console.log(`withBlueStyle -- `, withBlueStyle)

export default function Currying() {
  return (
    <div>
      <h1>Currying</h1>
      <ProductList
        products={[
          {
            id: 1,
            name: "Product 1",
          },
          {
            id: 2,
            name: "Product 2",
          },
        ]}
      />
      <Cart
        cartItems={[
          {
            productId: 1,
            productName: "Product 1",
          },
          {
            productId: 2,
            productName: "Product 2",
          },
        ]}
      />
      {withBlueStyle({text: 'A组件'})}
      {withRedStyle({text: 'B组件'})}
    </div>
  );
}
