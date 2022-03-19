import { NavLink } from "react-router-dom";
import Login from "../../components/Login";


function Landing({checkUserActive}) {
    return (
      <div className="landing">
          <Login checkUserActive={checkUserActive}/>
        <NavLink to ='home'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Home
        </NavLink>
        <NavLink to ='review'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Write a Review
        </NavLink>
        <NavLink to ='profile'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Profile
        </NavLink>
      </div>
    );
  }
  
  export default Landing;