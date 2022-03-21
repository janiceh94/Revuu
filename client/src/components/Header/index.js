import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service";

function Header({isLoggedIn}) {

    const navigate=useNavigate();

    function signOut(e) {
        e.preventDefault();
        authService.logout();
        console.log('logout');
        navigate("/");
    }

    if(isLoggedIn){
        return (    
            <div id="pageHeader">
                <span id="logo">Revuu</span>
                <button type="button" onClick={signOut}>Sign out</button>
            </div>
        );
    }else{
        return (    
            <div id="pageHeader">
                <span id="logo">Revuu</span>
            </div>
        );
    }
}

export default Header;