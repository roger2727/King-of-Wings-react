import logo from "./logo.svg";
import "./App.css";

import Banner from "./UI/Start";
import Footer from "./UI/footer";
import Button from "./UI/Button";
function App() {
  return (
    <div className="myContainer">
      <Banner />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
