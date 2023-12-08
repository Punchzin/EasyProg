import * as Style from "./Header.styles";
import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";

const Header = () => {

  return (
    <Style.Header>
      <Style.HeaderBrand>
        <h2>EASYPROG</h2>
      </Style.HeaderBrand>
      <Style.HeaderActions>
        <Style.Robot>
          <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
        </Style.Robot>
      </Style.HeaderActions>
    </Style.Header>
  );
};

export default Header;
