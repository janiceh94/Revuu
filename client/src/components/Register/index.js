import { useState } from "react";
import * as authService from "../../api/auth.service";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		await authService.register(email, password);
		setEmail("");
		setPassword("");
		setSuccessMsg("SUCCESS YAY!");
	};

	return (
		<div>
			<form >
				<label htmlFor="email">
                    Email
					<input
						
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="text"
						name="email"
						placeholder="email"
					/>
				</label>
				<label htmlFor="password">
                    Password
					<input
					
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type="text"
						name="password"
						placeholder="new password"
					/>
				</label>
				<button onClick={handleSubmit}>
					Register
				</button>
				<h1 style={{ color: "green" }}>{successMsg}</h1>
			</form>
		</div>
	);
};

export default Register;