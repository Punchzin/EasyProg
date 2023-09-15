import * as Style from "./Output.style";

const Output = () => {
  return (
    <Style.OutputWrapper>
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
        <Style.OutputButton>
          <i className="ri-layout-top-2-line"></i>
          Ver detalhes
        </Style.OutputButton>
      </Style.OutputHeaderWrapper>
    </Style.OutputWrapper>
  );
};

export default Output;
