import { CircularProgress } from "@mui/material";
import * as Styles from "./Loading.styles";

const Loading = () => {
  return (
    <Styles.Wrapper>
      <Styles.Loading>
        <CircularProgress />
        <p>Carregando a plataforma...</p>
      </Styles.Loading>
    </Styles.Wrapper>
  );
};

export default Loading;
