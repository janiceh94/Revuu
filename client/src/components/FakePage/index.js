import FooterCR from "../FooterCR";
import FooterSticky from "../FooterSticky";
import Header from "../Header";
import Home from '../../page/Home';
import "./FakePage.css";
function App() {
  return (
    <div className="App">
      <Header/>
      <FooterSticky/>
      <Home/>
      <FooterCR/>
    </div>
  );
}

export default App;
