import { useEffect, useState } from 'react';
import apiClient from '../../api/axios.config';


const UserProfile = () => {
    const [user, setUserProfile] = useState([]);

    async function fetchUserProfile() {
        await apiClient.get(`/user`).then((res) => {
            setUserProfile(res.data.data);
        })
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);


    return(
        <div>
            <h2>User Profile</h2>
            {user.map((user, i) => {
				return <h3 key={i}>{user.firstName}</h3>;
			})}
        </div>
    )
}

export default UserProfile;