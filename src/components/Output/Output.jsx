import React from "react";
import * as Style from "./Output.style";  
import { CodeContext } from "../../pages/Code/Code";
import { useResponse } from "../../pages/Code/useInputText";


// eslint-disable-next-line react/prop-types
const Output = ({ isOpen, handleOpen, hasContent = true }) => {

  const ventilador = useResponse

  return (
    <Style.OutputContainer>
      <Style.OutputWrapper style={{ height: isOpen ? "70vh" : "220px" }}>
        {hasContent && (
          <React.Fragment>
            <Style.OutputHeaderWrapper>
              <Style.OutputElement>
                <i className="ri-trophy-line"></i>
                <Style.WrapperOut>
                  <Style.OutHeader>Output</Style.OutHeader>
                  <Style.OutMid>Descrição do erro:</Style.OutMid>
                </Style.WrapperOut>
              </Style.OutputElement>
              <Style.OutputButton onClick={() => handleOpen()}>
                <i className="ri-layout-top-2-line"></i>
                Ver detalhes
              </Style.OutputButton>
            </Style.OutputHeaderWrapper>
            <Style.OutputText>
              <p>
                {ventilador}
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />
                módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />módulo requests esteja instalado corretamente antes de
                importá-lo.
                <br />  
              </p>
            </Style.OutputText>
            <Style.OutputTextOverlay isOpen={isOpen} />
          </React.Fragment>
        )}
      </Style.OutputWrapper>
    </Style.OutputContainer>
  );
};

export default Output;
