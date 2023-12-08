import * as Styles from "./NotFound.styles";

const NotFound = () => {
  return (
    <Styles.Wrapper>
      <Styles.NotFound>
        <h1>404</h1>
        <span />
        <p>Página não encontrada</p>
      </Styles.NotFound>
      <Styles.NotFoundLinks>
        <a href="/">Voltar para a home</a>
        <span />
        <a href="/auth">Fazer login</a>
      </Styles.NotFoundLinks>
    </Styles.Wrapper>
  );
};

export default NotFound;
