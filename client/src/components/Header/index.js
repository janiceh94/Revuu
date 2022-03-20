import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service";

function Header() {

    const navigate=useNavigate();

    function signOut(e) {
        e.preventDefault();
        authService.logout();
        console.log('logout');
        navigate("/");
    }

    return (    
        <div id="pageHeader">
            <span id="logo">Revuu</span>
            <button type="button" onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Header;