import "./global/styles.global.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
import RoutesApp from "./routes";

const App = () => {
  return (
    <Providers>
      <RoutesApp />
    </Providers>
  );
};

export default App;
