import * as Styles from "./LandingPage.styles";
import EASY_LOGO from "../../assets/images/easyprog-logo.svg";
import EASY_BOT from "../../assets/images/easybot-normal.svg";
import EASY_PREVIEW from "../../assets/images/landingpage-preview.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate("/auth");
  };

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.Header>
          <Styles.HeaderSide>
            <img src={EASY_LOGO} alt="EasyProg Logo" />
            <p>EASYPROG</p>
          </Styles.HeaderSide>
          <Styles.HeaderSide>
            <Styles.CTAVersion>v1.0.0-BETA</Styles.CTAVersion>
            <Button
              label="Connect to the platform 🌟"
              onClick={handleConnect}
            />
          </Styles.HeaderSide>
        </Styles.Header>
        <Styles.Hero>
          <img src={EASY_BOT} alt="EasyBot" />
          <Styles.HeroText>
            <h1>Your mistake, our solution</h1>
            <p>
              This platform specializes in <strong>code correction</strong>,
              offering a dedicated space for users to submit their{" "}
              <strong>code for review</strong> and <strong>improvement</strong>.
            </p>
          </Styles.HeroText>
          <Button label="Connect to the platform 🌟" onClick={handleConnect} />
        </Styles.Hero>
        <Styles.Preview>
          <img src={EASY_PREVIEW} alt="EasyProg Preview" />
        </Styles.Preview>
      </Styles.Container>
    </Styles.Wrapper>
  );
};

export default LandingPage;
