import * as Style from "./Output.style";

const Output = ({ isOpen, handleOpen }) => {
  return (
    <Style.OutputContainer>
      <Style.OutputWrapper style={{ height: isOpen ? "70vh" : "220px" }}>
        <Style.OutputHeaderWrapper>
          <Style.OutputElement>
            <i className="ri-trophy-line"></i>
            <Style.WrapperOut>
              <Style.OutHeader>
                Output
              </Style.OutHeader>
              <Style.OutMid>
                Descrição do erro:
              </Style.OutMid>
            </Style.WrapperOut>
          </Style.OutputElement>
          <Style.OutputButton
            onClick={() => handleOpen()}
          >
            <i className="ri-layout-top-2-line"></i>
            Ver detalhes
          </Style.OutputButton>
        </Style.OutputHeaderWrapper>
      </Style.OutputWrapper>
    </Style.OutputContainer>

  );
};

export default Output;
