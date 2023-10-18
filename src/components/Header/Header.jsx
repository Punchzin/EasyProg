import { useNavigate } from "react-router-dom";
import * as Style from "./Header.styles";
import { useState } from "react";

const Header = () => {
  const [themeSelected, setThemeSelected] = useState("");

  const navigate = useNavigate();

  return (
    <Style.Header>
      <Style.HeaderBrand>
        <h2>EASYPROG</h2>
      </Style.HeaderBrand>
      <Style.HeaderActions>
        <Style.InputIconButton
          onClick={() => setThemeSelected((prev) => !prev)}
        >
          <i className={!themeSelected ? "ri-moon-fill" : "ri-sun-fill"}></i>
        </Style.InputIconButton>
        <Style.Login onClick={() => navigate("/login")}>LOGIN</Style.Login>
      </Style.HeaderActions>
    </Style.Header>
  );
};

export default Header;
