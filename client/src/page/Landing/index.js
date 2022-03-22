import { NavLink } from "react-router-dom";
import Login from "../../components/Login";
import Register from '../../components/Register'

function Landing({checkUserActive}) {
    return (
        <div>
            <div className="landing">
            <Login id="Login" checkUserActive={checkUserActive}/>
            <Register id="Register"/>
            </div>
      </div>
    );
  }
  
  export default Landing;