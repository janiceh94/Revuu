import FooterCR from "../FooterCR";
import FooterSticky from "../FooterSticky";
import Header from "../Header";
import Home from '../../page/Home';
import "./FakePage.css";
function FakePage() {
  return (
    <div className="FakePage">
      <Header/>
      <span id="logo">Revuu</span>
      <h1>Fake page for testing whatever you want. Make sure to delete me.</h1>
      <small>small style</small>
      <button>button style</button>
      <p>p text</p>
      <a href="">Default Link</a>
      <div className="gg-check-o"></div>Icon test
      <img src="https://i.kym-cdn.com/photos/images/original/001/072/714/40b.gif"/>
      <FooterSticky/>
      <Home/>
      <FooterCR/>
    </div>
  );
}

export default FakePage;
