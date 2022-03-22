import React from 'react';
import { useEffect, useState } from "react";
import * as authService from "../../api/auth.service"

export default function UserProfile(){

    const [usr, setUsr] = useState({});

    const fetchUser = async () => {
		await authService.getProfile()
		.then((res) => {
            console.log("res",res);
			setUsr(res.data.data);
            console.log("usr1",usr);
		});
	};

    useEffect(() => {
        fetchUser()
	}, []);

    useEffect(() => {
        console.log("usr2", usr);
	}, [usr]);

    return(
        <div>
            <h2>{usr.email}</h2>
        </div>
    )
}