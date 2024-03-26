import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "./Store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };
  const cards = products.map((product) => (
    <div key={product.id} className="col-md-12 p-4">
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
              className="bg-[red]"
              variant="danger"
              onClick={() => removeToCart(product.id)}
            >
              Remove Items
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));
  return <div className="row">{cards}</div>;
};

export default Cart;
