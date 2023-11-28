/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import * as Styles from "../Auth.styles";
import Fade from "../../../global/Transitions/Fade";

const STEP_DICTIONARY = {
  0: "nothing",
  1: "bad",
  2: "medium",
  3: "good",
  4: "strong",
};

const Progress = ({ step }) => {
  return (
    <Styles.ProgressWrapper as={motion.div} variants={Fade.ChildFade}>
      <Styles.ProgressBar currentStep={STEP_DICTIONARY[step]} />
      <Styles.ProgressBar currentStep={STEP_DICTIONARY[step]} />
      <Styles.ProgressBar currentStep={STEP_DICTIONARY[step]} />
      <Styles.ProgressBar currentStep={STEP_DICTIONARY[step]} />
    </Styles.ProgressWrapper>
  );
};

export default Progress;
