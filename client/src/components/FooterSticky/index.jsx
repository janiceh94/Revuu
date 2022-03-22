import { useNavigate } from 'react-router-dom';
function FooterSticky({isLoggedIn}) {

    const navigate=useNavigate();
    if(isLoggedIn){
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
          <button onClick={
            () => navigate('/review/6238cfb38206848f4abe18e0')
          }>ReviewTest</button>
        </div>
      );
    }
    return(
      // replace with empty for finalizaion
      <div id="FootStick">
        <p>No logged user</p>
        <button onClick={
            () => navigate('/home')
        }>Home</button>
        <button onClick={
            () => navigate('/review')
        }>Review</button>
        <button onClick={
            () => navigate('/profile')
        }>Profile</button>
        <button onClick={
            () => navigate('/review/6238cfb38206848f4abe18e0')
        }>ReviewTest</button>
      </div>
    )
  }
  
  export default FooterSticky;

