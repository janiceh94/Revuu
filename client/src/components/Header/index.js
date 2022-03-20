// import { Redirect } from 'react-router'
import * as authService from "../../api/auth.service";

function Header() {

    function signOut(e) {
        e.preventDefault();
        authService.logout();
        console.log('logout');
    }

    return (    
        <div id="pageHeader">
            <span id="logo">Revuu</span>
            <button type="button" onClick={signOut}>Sign out</button>
            {/* FIXME REDIRECT NOT FUNCTIONAL */}
            {/* <Redirect to="/" /> */}
        </div>
    )
}

export default Header;