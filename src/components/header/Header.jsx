import { useState } from "react";
import "./header.css";
import HeaderLeft from "./HeaderLeft";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <HeaderLeft toggle={toggle} setToggle={setToggle}></HeaderLeft>
      <Navbar toggle={toggle} setToggle={setToggle}></Navbar>
      <HeaderRight setToggle={setToggle}></HeaderRight>
    </header>
  );
};
export default Header;
