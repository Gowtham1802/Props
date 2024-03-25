import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import FunctionClick from "./components/FunctionClick";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import LifeCycleA from "./components/LifeCycleA";
import ClassCounter from "./components/HooksState/ClassCounter";
import UseApi from "./components/UseApi";
import HomeApi from "./components/Home";
import Products from "./components/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";
// import App from "./components/UseApi";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <>
      <div>
        {/* <Message value="{setCount}"></Message> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <FunctionClick /> */}
        {/* <UserGreeting /> */}
        <br />
        {/* <NameList /> */}
        {/* <LifeCycleA /> */}
        {/* <ClassCounter /> */}
        {/* <App /> */}
        {/* <HomeApi /> */}
        {/* <Products /> */}
        <RouterProvider router={router} />
        {/* <Greet name="Justin" age="21" from="Tiruppur">
          <p>I am Front-End Developer</p>
        </Greet>
        <Greet name="Jack" age="22" from="Coimbatore">
          <button>Click Here!</button>
        </Greet>
        <Greet name="John" age="23" from="Erode" />
        <Greet name="Jasper" age="24" from="Salem" />
        <Welcome name="Justin" age="21" from="Tiruppur"></Welcome>
        <Welcome name="Jack" age="22" from="Coimbatore"></Welcome>
        <Welcome name="John" age="23" from="Erode"></Welcome>
        <Welcome name="Jasper" age="24" from="Salem"></Welcome> */}
      </div>
    </>
  );
}

export default App;
