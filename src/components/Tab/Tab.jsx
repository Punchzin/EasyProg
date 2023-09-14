import * as Style from "./Tab.styles";

const Tab = () => {
  return (
    <Style.TabWrapper>
      <p>Página aberta</p>
      <Style.Close>
        <i className="ri-close-line"></i>
      </Style.Close>
    </Style.TabWrapper>
  );
};

export default Tab;