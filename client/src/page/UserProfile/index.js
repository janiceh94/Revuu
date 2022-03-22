import React from 'react';
import { useEffect, useState } from "react";
import * as authService from "../../api/auth.service"

export default function UserProfile(){

    const [usr, setUsr] = useState({});

    const fetchUser = async () => {
		await authService.getProfile()
		.then((res) => {
            console.log(res);
			setUsr(res.data.data);
            console.log("usr",usr);
		});
	};

    useEffect(() => {
		fetchUser();
	}, []);

    return(
        <div>
            <h2>User profile</h2>
        </div>
    )
}