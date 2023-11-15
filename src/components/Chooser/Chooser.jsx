import { useNavigate } from "react-router-dom";

import { ITEMS_CONFIG } from "./Chooser.constansts";
import * as Style from "./Chooser.styles";
import { motion } from "framer-motion";
import Fade from "../../global/Transitions/Fade";

const Chooser = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={Fade.ParentFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Style.Choose>
        {ITEMS_CONFIG.map((item) => (
          <motion.div key={item.id} variants={Fade.ChildFade}>
            <Style.ChooseItem
              preset={item.preset}
              onClick={item.id === 0 ? () => navigate("/code") : null}
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