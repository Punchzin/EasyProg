// eslint-disable-next-line no-unused-vars
import React from "react";
import * as Style from "./Landpage.styles";
import { useNavigate } from "react-router-dom";
import EASYPROG_LOGO from "../../assets/images/easyprog-logo.svg";

const Landpage = () => {
  const navigate = useNavigate();

  return (
    <Style.Main>
      <Style.Container>
        <Style.Header>
          <img
            src={EASYPROG_LOGO}
            alt="logo EasyProg"
            onClick={() => navigate("/logo")}
          />
        </Style.Header>
        <Style.BlockWarper>
          <Style.BlockOne>
            <Style.BlockText>
              <p>Seu erro nossa solução.</p>
            </Style.BlockText>
            <Style.BlockButton>
                Iniciar
            </Style.BlockButton>
          </Style.BlockOne>
          <Style.BlockTwo>video</Style.BlockTwo>
          <Style.BlockTree>pq usar a ferramenta</Style.BlockTree>
        </Style.BlockWarper>
        <Style.Footer>redes sociais</Style.Footer>
      </Style.Container>
    </Style.Main>
  );
};

export default Landpage;
