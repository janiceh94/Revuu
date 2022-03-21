import { NavLink } from "react-router-dom";
import Login from "../../components/Login";
import Register from '../../components/Register'

function Landing({checkUserActive}) {
    return (
        <div>
            <div className="landing">
            <Login id="Login" checkUserActive={checkUserActive}/>
            <Register id="Register"/>
            {/* <NavLink to ='home'
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
            </NavLink> */}
            </div>
      </div>
    );
  }
  
  export default Landing;