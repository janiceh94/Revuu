import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "../Header"
import FootStick from "../FooterSticky";
import FootCR from "../FooterCR";
import FakePage from "../FakePage";
import Home from '../../page/Home';
import UserProfile from '../../page/UserProfile'; 
import Landing from '../../page/Landing'; 
import CreateReview from '../../page/CreateReview'; 
import ShowReview from '../../page/ShowReview'; 
import EditReview from '../../page/EditReview';
import { useReducer, useEffect} from "react";
import * as authService from "../../api/auth.service";
import * as reviewService from "../../api/review.service";

const reducer = (prevState, action) => {
  switch(action.type) {
      case "setReviews":
          return {...prevState, reviews: action.payload};
      case "setIsLoggedIn":
          return {...prevState, isLoggedIn: action.payload};
      default: 
          return prevState
  }
}

const initialState = {
  isLoggedIn: false,
  reviews: []
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { reviews, isLoggedIn } = state;

  const fetchReviews = async () => {
      await reviewService.getAllReviews().then((res) => {
          dispatch({ type: "setReviews", payload: res.data.data.reverse() })
      });
  };

  const checkLogin = () => {
      if(authService.currentUser()) {
          dispatch({type: "setIsLoggedIn", payload: true})
      }else {
          dispatch({type: "setIsLoggedIn", payload: false})
      }
  }

  useEffect(() => {
      fetchReviews();
      checkLogin();
      //window.location.reload(false);
  }, []);

  if (isLoggedIn) {
      return (
        <div className="App">
          <Header isLoggedIn={isLoggedIn}/>
        <Routes>
        <Route path="/" element={<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/>          
        <Route path='home' element = {<Home />}/>
          <Route path='profile' element = {<UserProfile />}/>
          <Route path="review" element={<CreateReview  />}/>
          <Route path="review/:id" element={<ShowReview />} />
          <Route path="review/:id/edit" element={<EditReview />} />
        </Routes>
        <FootCR/>
        <FootStick isLoggedIn={isLoggedIn}/>
    </div>
      );
  } else {
      return(
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/>
            <Route path='home' element = {<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/>
            <Route path='profile' element = {<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/>
            <Route path='fake-page' element = {<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/> 
            <Route path="review" element={<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>}/>
            <Route path="review/:id" element={<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>} />
            <Route path="review/:id/edit" element={<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>} />
          </Routes>
          <FootCR/>
          <FootStick/>
        </div>
      )
  }
}

export default App;