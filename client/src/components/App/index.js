import FakePage from "../FakePage"
import Home from '../../page/Home';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <FakePage/>
      <Routes>
        <Route path = 'review' element = {
          <Home/>
          }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;