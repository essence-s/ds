import "./App.css";
import { Navbar, Footer } from "./components/layouts/index";
import { ModalCookies } from "./components/common";
import Home from "./views/home/Home";
import { DivSwitchTheme } from "./components/common/switchTheme/SwitchTheme";

function App() {
  return (
    <DivSwitchTheme className="App" data={{ c0: "default", c2: "black" }}>
      <ModalCookies></ModalCookies>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </DivSwitchTheme>
  );
}

export default App;
