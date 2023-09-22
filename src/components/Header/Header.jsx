 import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";
import { useState } from "react";
import HeaderAction from "./HeaderAction";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Style.Header>
      <Style.HeaderBrand>
        <h2>EASYPROG</h2>
      </Style.HeaderBrand>
      <Style.HeaderActions>
        <Style.Login onClick={() => navigate('/login')}>
          LOGIN
        </Style.Login>
      </Style.HeaderActions>
    </Style.Header>
  );
};

export default Header;
