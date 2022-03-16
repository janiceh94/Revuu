import {NavLink} from 'react-router-dom';
function FooterSticky() {
    return (
      <div className="FootStick">
        <NavLink to ='/Home'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Home
        </NavLink>
        <NavLink to ='/Review'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Write a Review
        </NavLink>
        <NavLink to ='/Profile'
            style = {({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>
                Profile
        </NavLink>
      </div>
    );
  }
  
  export default FooterSticky;

