import * as Style from "./Chooser.styles";
import PY_BRAND from "../../assets/images/py_icon.svg";

const Chooser = () => {
  return (
    <Style.Choose>
      <Style.ChooseItem>
        <Style.ChooseBody>
          <Style.Lang>Language</Style.Lang>
          <Style.ChooseLang>Python</Style.ChooseLang>
        </Style.ChooseBody>
        <img src={PY_BRAND} alt="LogoTipo Python" />
      </Style.ChooseItem>
      <Style.ChooseItem>
        <Style.ChooseBody>
          <Style.Lang>Language</Style.Lang>
          <Style.ChooseLang>C#</Style.ChooseLang>
        </Style.ChooseBody>
        <img src={PY_BRAND} alt="LogoTipo C#" />
      </Style.ChooseItem>
      <Style.ChooseItem>
        <Style.ChooseBody>
          <Style.Lang>Language</Style.Lang>
          <Style.ChooseLang>Javascript</Style.ChooseLang>
        </Style.ChooseBody>
        <img src={PY_BRAND} alt="LogoTipo Javascript" />
      </Style.ChooseItem>
    </Style.Choose>
  );
};

export default Chooser;
