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
        </Style.InputIconButton>
      </Style.HeaderActions>
    </Style.Header>
  );
};

export default Header;
