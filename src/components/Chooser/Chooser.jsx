import { useNavigate } from "react-router-dom";

import { ITEMS_CONFIG } from "./Chooser.constansts";
import * as Style from "./Chooser.styles";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";
import useCodeContext from "../../hooks/useCodeContext";

const Chooser = () => {
  const navigate = useNavigate();
  const { handleChangeLanguage } = useCodeContext();

  const handleSelectLanguage = (language) => {
    handleChangeLanguage(language);
    navigate("/code");
  }
  
  return (
    <motion.div
      variants={Fade.ParentFade}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ height: "100%" }}
    >
      <Style.Choose>
        {ITEMS_CONFIG.map((item) => (
          <motion.div key={item.id} variants={Fade.ChildFade}>
            <Style.ChooseItem
              preset={item.preset}
              onClick={() => handleSelectLanguage(item.preset)}
            >
              <Style.ChooseBody>
                <Style.Lang>{item.type}</Style.Lang>
                <Style.ChooseLang>{item.title}</Style.ChooseLang>
                <Style.Status preset={item.preset}>{item.status}</Style.Status>
              </Style.ChooseBody>
              <img src={item.image} alt={`Logotipo ${item.title}`} />
            </Style.ChooseItem>
          </motion.div>
        ))}
      </Style.Choose>
    </motion.div>
  );
};

export default Chooser;
