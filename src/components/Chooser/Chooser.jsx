import { useNavigate } from "react-router-dom";

import { ITEMS_CONFIG } from "./Chooser.constansts";
import * as Style from "./Chooser.styles";

const Chooser = () => {
  const navigate = useNavigate();

  return (
    <Style.Choose>
      {ITEMS_CONFIG.map((item) => (
        <Style.ChooseItem 
            preset={item.preset} 
            key={item.id} 
            onClick={() => navigate('/code')}
          >
          <Style.ChooseBody>  
            <Style.Lang>{item.type}</Style.Lang>
            <Style.ChooseLang>{item.title}</Style.ChooseLang>
            <Style.Status preset={item.preset}>{item.status}</Style.Status>
          </Style.ChooseBody>
          <img src={item.image} alt={`Logotipo ${item.title}`} />
        </Style.ChooseItem>
      ))}
    </Style.Choose>
  );
};

export default Chooser;