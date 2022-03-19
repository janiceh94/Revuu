import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FakePage from "../FakePage";
import Home from '../../page/Home';
import UserProfile from '../../page/UserProfile'; 
import Landing from '../../page/Landing'; 
import CreateReview from '../../page/CreateReview'; 
import ShowReview from '../../page/ShowReview'; 
import EditReview from '../../page/EditReview';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path='home' element = {<Home />}/>
          <Route path='profile' element = {<UserProfile />}/>
          {/* Delete FakePage later */}
          <Route path='fake-page' element = {<FakePage />}/> 
          <Route path="review" element={<CreateReview  />}/>
          <Route path="review/:id" element={<ShowReview />} />
          <Route path="review/:id/edit" element={<EditReview />} />
        </Routes>
    </div>
  );
}

export default App;