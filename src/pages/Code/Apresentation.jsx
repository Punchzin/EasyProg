import EASYBOT_NORMAL from "../../assets/images/easybot-normal.svg";
import EASYPROG_BRAND from "../../assets/images/easyprog-logo.svg";
import * as Style from "./Apresentation.styles";

const Apresentation = () => {
  // Insira seu javascript aqui
  return (
    <main>
      <aside>
        <div className="aside-wrapper">
          <div className="aside-brand">
            <img src={EASYPROG_BRAND} alt="LogoTipo EasyPog" />
          </div>
          <div className="aside-divider"></div>
          <div className="aside-actions">
            <button className="aside-action">
              {/* File */}
              <i className="ri-file-3-line"></i>
            </button>
            <button className="aside-action">
              {/* Configuration */}
              <i className="ri-settings-3-line"></i>
            </button>
            <button className="aside-action">
              {/*Help*/}
              <i className="ri-question-line"></i>
            </button>
          </div>
          <div className="aside-divider"></div>
          <div className="aside-actions">
            <button className="aside-action">
              {/*Run*/}
              <i className="ri-play-line"></i>
            </button>
            <button className="aside-action">
              {/*Pause*/}
              <i className="ri-pause-fill"></i>
            </button>
            <button className="aside-action">
              {/*Reload*/}
              <i className="ri-restart-line"></i>
            </button>
          </div>
        </div>
        <button className="aside-action">
          {/*Logout*/}
          <i className="ri-logout-box-r-line"></i>
          </button>
      </aside>
      <div className="container">
        <header className="header">
          <div className="header-brand">
            <h2>EASYPROG</h2>
          </div>
          <div className="header-actions">
            <div className="keywords"></div>
            <button className="login"></button>
          </div>
        </header>
        <section className="content">
          <div className="tab">
            <p>Página aberta</p>
            <button className="close">X</button>
          </div>
          <div className="headline">
            <h2>Hey, Welcome!</h2>
            <h4>Escolha a linguagem.</h4>
            <div className="robot">
              <img src={EASYBOT_NORMAL} alt="EasyBot normal" />
            </div>
          </div>
          <div className="wrapper">
            <div className="chooser">
              <div className="choose-item">Python</div>
              <div className="choose-item">C#</div>
              <div className="choose-item">JavaScript</div>
            </div>
            <div className="usemode">
              Video
            </div>
          </div>
        </section>
        <div className="output">
          saida de dados
        </div>
      </div>
    </main>
  );
};

export default Apresentation;
