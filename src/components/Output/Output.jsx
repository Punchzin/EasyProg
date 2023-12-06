/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import * as Style from "./Output.style";
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import useCodeContext from "../../hooks/useCodeContext";

const Output = ({
  setOutputIsOpen,
  outputIsOpen,
  handleOpen,
  hasContent = true,
}) => {
  const { codeResponse } = useCodeContext();

  useEffect(() => {
    if (!codeResponse) {
      return;
    }

    setOutputIsOpen(true);
  }, [codeResponse, setOutputIsOpen]);

  return (
    <Style.OutputContainer>
      <Style.OutputWrapper style={{ height: outputIsOpen ? "70vh" : "220px" }}>
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
            {codeResponse && (
              <React.Fragment>
                <Style.OutputText outputIsOpen={outputIsOpen}>
                  <p>{codeResponse}</p>
                </Style.OutputText>
                <Style.OutputTextOverlay outputIsOpen={outputIsOpen} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </Style.OutputWrapper>
    </Style.OutputContainer>
  );
};

export default Output;
