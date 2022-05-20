import logo from "./logo.svg";
import "./App.css";
import styles from "./Components/StartGame.module.css";
import Banner from "./assets/Start";
import Footer from "./assets/footer";
import DisplayImageComponent from "./Components/StartGame";
function App() {
  return (
    <div className="myContainer">
      <Banner></Banner>
      <DisplayImageComponent></DisplayImageComponent>

      <Footer></Footer>
    </div>
  );
}

export default App;
