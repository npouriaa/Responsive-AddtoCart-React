//Imports
import React from "react";
import "./Products.css";
import Product from "../Product/Product";

const Products = (props) => {
  //Products array
  const ProductArray = [
    {
      id: 1,
      count: 0,
      title: "T-shirt",
      price: "40",
      src: "https://superzoom.onlinesuperimage.com/fsicache/server?source=/3D%20Images/strauss/89601-30/89_60_148_R020.png&height=600",
    },
    {
      id: 2,
      count: 0,
      title: "Watch",
      price: "135",
      src: "https://purepng.com/public/uploads/large/wrist-watch-ogx.png",
    },
    {
      id: 3,
      count: 0,
      title: "Iphone 14 pro max",
      price: "237",
      src: "https://png.monster/wp-content/uploads/2022/09/png.monster-209.png",
    },
    {
      id: 4,
      count: 0,
      title: "Galaxy s23 Ultra",
      price: "250",
      src: "https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra-PNG-Image-HD.png",
    },
  ];

  //Add product to cart function
  const AddToCartHandler = (id) => {
    let array = [...props.cartListArray];
    let product = ProductArray.filter((i) => i.id === id);
    array.push(product[0]);

    const arr = array;
    const groupedArr = Object.values(
      arr.reduce((acc, curr) => {
        const key = curr.id + "|" + curr.name;
        if (!acc[key]) {
          acc[key] = [curr];
        } else {
          acc[key].push(curr);
        }
        return acc;
      }, {})
    );

    groupedArr.map((i) => {
      let countArray = i.filter((i) => i.id === id);
      countArray.map((item) => {
        return (item.count += 1);
      });
    });

    props.setcartListArray(array);
    props.productsArray(array);
  };

  return (
    <main className="product-con">
      <div className="product-con-header">
        <h1 className="f">Shop</h1>
        <h1 className="s">your favorites</h1>
      </div>
      <div className="product-con-content">
        {ProductArray.map((i) => (
          <Product
            click={() => AddToCartHandler(i.id)}
            key={i.id}
            title={i.title}
            price={i.price}
            imgSrc={i.src}
          />
        ))}
      </div>
    </main>
  );
};

export default Products;
