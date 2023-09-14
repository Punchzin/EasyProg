import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import * as Style from "./HeadLine.style";

const HeadLine = ({title, description}) => {
    return (
        <Style.HeadLineWrapper>
          <Style.Texts>
            <h2>{title}</h2>
            <h4>{description}</h4>
          </Style.Texts>
          <Style.Robot>
            <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
          </Style.Robot>
        </Style.HeadLineWrapper>
    );
};

export default HeadLine;