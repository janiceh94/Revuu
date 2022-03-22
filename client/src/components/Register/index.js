import { useState } from "react";
import * as authService from "../../api/auth.service";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.register(email, password).then((err) => {
			if(err){
				console.log(err);
			} else {
				setEmail("");
				setPassword("");
				document.querySelector('#registration').style.display = "block";
			}
		})
		
	};

	return (
		<div id="register">
			<form >
				<h3>Sign up</h3>
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
						placeholder="new password"
					/>
				<button onClick={handleSubmit}>
					Register
				</button>
				<p id="registration">Registration Successful. Please Login.</p>
			</form>
		</div>
	);
};

export default Register;