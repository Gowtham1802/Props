import { NavbarText } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
          <Nav>
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                MY Bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
//
// const NavBar = () => {
//   const cartProducts = useSelector((state) => state.cart);
//
//   const addToCart = (product) => {
//     // Implement your add to cart logic here
//     console.log("Adding to cart:", product);
//   };
//
//   return (
//     <div>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-end">
//             <Nav className="mr-auto">
//               <Nav.Link as={Link} to="/">
//                 Products
//               </Nav.Link>
//             </Nav>
//             <Navbar.Text>
//               <Nav.Link as={Link} to="/cart">
//                 MY Bag {cartProducts.length}
//               </Nav.Link>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
//
// export default NavBar;
