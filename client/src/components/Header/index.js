import React from "react"

function Header() {
    return (    
        <div>
            <img src=""/>
            <form>
                <label>
                    <input type="text" placeholder="search"/>
                </label>
                <input type="submit" value="submit"/>
                {/* <a type="submit" href=""></a> */}
            </form>
            <ul>
                <li>
                    <a href="">Login</a> 
                </li>
                <li>
                    <a href="">Register</a>
                </li>
                <li>
                    <a href="">Logout</a>
                </li>
            </ul>
            <h2>Header</h2>
        </div>
    )
}

export default Header;