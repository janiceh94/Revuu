import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import * as authService from "../../api/auth.service";

export default function Login({checkUserActive}) {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        await authService.login(email, password).then(() => {
            {checkUserActive()}
            setEmail("");
            setPassword("");
            console.log('handle submit');
            navigate('/home');
        })
    }

    return (
        <div id="login">
            <form>
                <h3>Log in</h3>
                <label htmlFor="email">Email</label>
                <input	
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="text"
						name="email"
						placeholder="email"
                        />
                <label htmlFor="password">Password</label>
                 <input	
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="text"
						name="password"
						placeholder="password"
                        />
                <div>
                <button onClick={handleSubmit}>
						Login
					</button>
                </div>
                {/* <input type="submit" onSubmit={handleSubmit} /> */}
            </form>
        </div>
    )
}