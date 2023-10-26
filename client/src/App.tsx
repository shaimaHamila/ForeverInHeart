import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import PublicRoute from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  );
}

export default App;
