import FooterCR from "../FooterCR";
import FooterSticky from "../FooterSticky";
import Header from "../Header";
import "./FakePage.css";
function FakePage() {
  return (
    <div className="App">
      <Header/>
      <FooterSticky/>
      <FooterCR/>
    </div>
  );
}

export default FakePage;
