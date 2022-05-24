import logo from "./logo.svg";
import "./App.css";

import Banner from "./assets/Start";
import Footer from "./assets/footer";
import DisplayImageComponent from "./Components/StartGame";
function App() {
  return (
    <div className="myContainer">
    <Banner />
      <DisplayImageComponent />

      <Footer />
    </div>
  );
}

export default App;
