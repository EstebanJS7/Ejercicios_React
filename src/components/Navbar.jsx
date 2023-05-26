import React from "react";
import "./Navbar.css";
import ButtonForms from "./ButtonForms";

function Navbar() {

  return (
    <navbar className="containernav">
      <img
        className="logoimg"
        src="https://res.cloudinary.com/dhzoxdo6q/image/upload/v1685025897/Roshka/react-white_hcr6av.png"
      />

        <ul className="listaelement">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      <div className="navbutton">
            <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left" icon="bi bi-person-fill" border={false} disabled={false}  height='30px'>
                Login
            </ButtonForms>
            <ButtonForms transparent={false} background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px'>
                Book a Demo
            </ButtonForms>
      </div>
    </navbar>
  );
}

export default Navbar;
