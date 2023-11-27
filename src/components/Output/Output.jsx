/* eslint-disable react/prop-types */
import React from "react";
import * as Style from "./Output.style";
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import useOpenAIContext from "../../hooks/useOpenAIContext";

const Output = ({ isOpen, handleOpen, hasContent = true }) => {
  const { codeResponse } = useOpenAIContext();

  return (
    <Style.OutputContainer>
      <Style.OutputWrapper style={{ height: isOpen ? "70vh" : "220px" }}>
        {hasContent && (
          <React.Fragment>
            <Style.OutputHeaderWrapper>
              <Style.OutputElement>
                <img src={EASYPROG_BRAND} />
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
              <p>{codeResponse}</p>
            </Style.OutputText>
            <Style.OutputTextOverlay isOpen={isOpen} />
          </React.Fragment>
        )}
      </Style.OutputWrapper>
    </Style.OutputContainer>
  );
};

export default Output;
