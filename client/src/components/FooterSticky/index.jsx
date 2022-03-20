import { useNavigate } from 'react-router-dom';
function FooterSticky() {

    const navigate=useNavigate();

    return (
      <div id="FootStick">
        <button onClick={
            () => navigate('/home')
        }>Home</button>
        <button onClick={
            () => navigate('/review')
        }>Review</button>
        <button onClick={
            () => navigate('/profile')
        }>Profile</button>
      </div>
    );
  }
  
  export default FooterSticky;

