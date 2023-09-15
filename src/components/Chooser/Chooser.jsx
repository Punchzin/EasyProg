import * as Style from "./Chooser.styles";
import PY_BRAND from "../../assets/images/py_icon.svg";
import CS_BRAND from "../../assets/images/cs_icon.svg";
import JS_BRAND from "../../assets/images/js_icon.svg";

const Chooser = () => {
  return (
    <Style.Choose>
        <Style.ChooseItem preset="python">
          <Style.ChooseBody>
            <Style.Lang>Language</Style.Lang>
            <Style.ChooseLang>Python</Style.ChooseLang>
          </Style.ChooseBody>
          <img src={PY_BRAND} alt="LogoTipo Python" />
        </Style.ChooseItem>
        <Style.ChooseItem preset="csharp">
          <Style.ChooseBody>
            <Style.Lang>Language</Style.Lang>
            <Style.ChooseLang>CSharp</Style.ChooseLang>
          </Style.ChooseBody>
          <img src={CS_BRAND} alt="LogoTipo CSharp" />
        </Style.ChooseItem>
        <Style.ChooseItem preset="javascript">
          <Style.ChooseBody>
            <Style.Lang>Language</Style.Lang>
            <Style.ChooseLang>Javascript</Style.ChooseLang>
          </Style.ChooseBody>
          <img src={JS_BRAND} alt="LogoTipo Javascript" />
        </Style.ChooseItem>
    </Style.Choose>
  );
};

export default Chooser;
