import "./global/styles.global.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
import RoutesApp from "./routes";
import { CSSGlobalStyles } from "./global/styles.global";

const App = () => {
  return (
    <Providers>
      <CSSGlobalStyles />
      <RoutesApp />
    </Providers>
  );
};

export default App;
