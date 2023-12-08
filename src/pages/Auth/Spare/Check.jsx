/* eslint-disable react/prop-types */
import * as Styles from "../Auth.styles";

const Check = ({ completed }) => {
  return (
    <Styles.CheckWrapper completed={completed}>
      <i className="ri-check-line"></i>
    </Styles.CheckWrapper>
  );
};

export default Check;
