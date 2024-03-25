// import { data } from "autoprefixer";
// import { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CardFooter } from "react-bootstrap";
//
// const Products = () => {
//   const [products, getProducts] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((data) => data.json())
//       .then((result) => getProducts(result));
//   }, []);
//
//   const cards = products.map((product) => (
//     <div className="col-md-3 p-4 ">
//       <Card key={product.id} className="h-100">
//         <div className="flex justify-center items-center">
//           <Card.Img
//             variant="top"
//             src={product.image}
//             className="w-[100px] h-[130px]"
//           />
//         </div>
//
//         <Card.Body>
//           <div className="text-center">
//             <Card.Title>{product.title}</Card.Title>
//           </div>
//           <div className="text-center">
//             <Card.Text>INR : {product.price}</Card.Text>
//           </div>
//         </Card.Body>
//         <Card.Footer className="bg-[white]">
//           <div className="text-center ">
//             <Button className="bg-[blue]" variant="primary">
//               Add to card
//             </Button>
//           </div>
//         </Card.Footer>
//       </Card>
//     </div>
//   ));
//   return (
//     <>
//       <div>
//         <h1 className="font-bold text-center text-[3rem]">
//           Product Dashboard
//         </h1>
//         <div className="row ">{cards}</div>
//       </div>
//     </>
//   );
// };
//
// export default Products;

import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "./Store/cartSlice";
const Products = () => {
  const dispatch = useDispatch();

  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3 p-4">
      <Card className="h-100">
        <div className="d-flex justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={product.image}
            className="w-[100px] h-[130px]"
          />
        </div>

        <Card.Body>
          <div className="text-center">
            <Card.Title>{product.title}</Card.Title>
          </div>
          <div className="text-center">
            <Card.Text>INR : {product.price}</Card.Text>
          </div>
        </Card.Body>

        <Card.Footer className="bg-white">
          <div className="text-center">
            <Button
              className="bg-[blue]"
              variant="primary"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <h1 className="font-bold text-center text-3xl">Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Products;
