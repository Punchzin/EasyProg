import * as Style from "./Header.styles";
//import { useState } from "react";
//import HeaderAction from "./HeaderAction";

const Header = () => {
  return (
    <Style.Header>
      <Style.HeaderBrand>
        <h2>EASYPROG</h2>
      </Style.HeaderBrand>
      <Style.HeaderActions>
        <Style.Keywords>Keywords</Style.Keywords>
        <Style.Login>LOGIN</Style.Login>
      </Style.HeaderActions>
    </Style.Header>
  );
};

export default Header;