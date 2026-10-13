 import React from "react";
 import './Product.css';
const products = [
  {
    id: 1,
    name: "FRIDO Sports Socks",
    price: 299,
    oldPrice: 499,
    image:
      "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=600&q=80",
  },
 {
    id: 3,
    name: "HEELIUM Cotton Socks",
    price: 359,
    oldPrice: 699,
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=600&q=80",
  },
];
 function Product() {
  return (
    <main className="products-page">
      <h2 className="page-title">Our Socks Collection</h2>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p className="price">₹{product.price}</p>
            <p className="old-price">₹{product.oldPrice}</p>

            <button
              className="buy-button"
              onClick={() =>
                alert(`${product.name} selected!`)
              }
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
export default Product;











// import React from 'react'
// import shoe from './shoe.jpg';
// import './Product.css'


// const Product = ({ productObj }) => {


//     return (
//         <div style={{ display: "flex" }}>
//             {productObj.map((item) => {
//                 return (
//                     <>
//                         <div className="containerCard">
//                             <img src={shoe} className="imageShoe" />
//                             <h3 className="headingShoe">{item.name}</h3>
//                             <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
//                                 <strike className="strikeShoe">${item.strikePrice}</strike></div>
//                             <button className="buttonShoe">  BUY NOW</button>

//                         </div>
//                     </>
//                 )
//             })}
//         </div>
//     )
// }

// export default Product