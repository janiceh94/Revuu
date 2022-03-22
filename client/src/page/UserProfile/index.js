import { useEffect, useState } from 'react';
import apiClient from "../../api/axios.config";
import * as userService from '../../api/user.service'
import Review from "../../components/ReviewsList/Review"

const User = () => {
    const [user, setUser] = useState({});
    const [reviews, setReviews] = useState([]);
    const userTwoReviews = useContext(userTwoReviews);


    // const fetchUserProfile = async () => {
	// 	await apiClient.get(`/api/user/:id`)
	// 	.then((res) => {
	// 		setUserProfile(res.data.data);
    //         console.log(user)
	// 	});
	// };


	

	const fetchReviews = async () => {
		await apiClient.get(`/api/review`)
		.then((res) => {
			setReviews(res.data.data.reverse());
		});
	};


    useEffect(() => {
        const fetchUserProfile = async() => {
            let userId = localStorage.getItem("userID");
            let JSONID = JSON.parse(userId)
            await userService.get(JSONID).then((res) => {
                console.log(res)
                //setUser(res.data.data);
                //userTwo = res.data.data
                const userTwo = React.createContext(res.data.data);
                console.log(user)
            })
        }
        fetchUserProfile();
        fetchReviews();
    }, []);


    // function getUserReviews() {
    //     reviews.forEach((review) => {
    //         if (userTwo.reviews.includes(review._id)) {
    //             return (
    //                 <div>
    //                     {review}
    //                 </div>
    //             )
    //         }
    //     })
    // }

    return(

        <div>
           <h1>User Profile</h1>

           <div>Name: {user.email} </div>

           <img className="profile" src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg" />
           
            <div>username: {user.username}</div>

           <button>Edit Profile</button>

           {/* <Review /> */}

           {/* {reviews.map((review, i)=>{
				return(
					<div>
					<Review key={i} data={review}/>
					<button onClick = {() => reviewId(review._id)}>View Review</button>
					</div>
				);
			})} */}

            {getUserReviews()}
    
           {/* <div className="container">reviews
               <img src="https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg"></img>
               <p>title</p>
               <p>review/comment {user.reviews}</p>
           </div>
           <div className="container">reviews
               <img src=""></img>
               <p>title</p>
               <p>review/comment {user.reviews}</p>
           </div>
           <div className="container">reviews
               <img src=""></img>
               <p>title</p>
               <p>review/comment {user.reviews}</p>
           </div> */}

<div>Name: {user.email} </div>

        </div>
    )
}

export default User;