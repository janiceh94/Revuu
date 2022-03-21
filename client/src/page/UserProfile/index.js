import { useEffect, useState } from 'react';
import apiClient from "../../api/axios.config";
import * as userService from '../../api/user.service'


const UserProfile = () => {
    const [user, setUserProfile] = useState({});

    // async function fetchUserProfile() {
    //     await userService.get().then((res) => {
    //         setUserProfile(res.data.data);
    //     })
    // }

    const fetchUserProfile = async () => {
		await apiClient.get(`/api/user`)
		.then((res) => {
			setUserProfile(res.data.data);
		});
	};

    useEffect(() => {
        fetchUserProfile();
    }, []);


    return(

        <div>
           <h1>User Profile</h1>

           <div>Name: {user.name}</div>

           <img className="profile" src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg" />
           
            <div>username: {user.username}</div>

           <button>Edit Profile</button><button>Edit review</button>

           <div className="container">reviews
               <img src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"></img>
               <p>title</p>
               <p>review/comment</p>
           </div>

        </div>
    )
}

export default UserProfile;