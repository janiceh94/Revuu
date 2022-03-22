import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service"
import apiClient from '../../api/axios.config';
import Review from "../../components/ReviewsList/Review"

export default function UserProfile(){

    const [usr, setUsr] = useState({});
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const fetchUser = async () => {
		await authService.getProfile()
		.then((res) => {
            console.log("res",res);
			setUsr(res.data.data);
            console.log("usr1",usr);
		});
	};

    const fetchReviews = async () => {
		await apiClient.get(`/api/review`)
		.then((res) => {
			setReviews(res.data.data.reverse());
		});
	};

    const reviewRoute = (id) =>{
        navigate(`/review/${id}`);
    }

    useEffect(() => {
        fetchUser()
        fetchReviews()
	}, []);

    useEffect(() => {
        console.log("usr2", usr);
        console.log("reviews:", reviews);
	}, [usr, reviews]);

    return(
        <div>
            <h3>{usr.firstName}</h3>
            <img src={usr.userIcon}/>
            <p>{usr.email}</p>
            <p>{usr.bio}</p>
            {reviews.map((review, i)=>{
                return(
                    <div>
                    <Review key={i} data={review}/>
                    <button onClick = {() => reviewRoute(review._id)}>View Review</button>
                    </div>
                )
            })}
        </div>
    )
}


{/* <div>
            <h3>{props.data.title}</h3>
            <h5>{props.data.reviewItem}</h5>
            <h5>{props.data.category}</h5>
            
            <p>{props.data.body}</p>
            <div>
                star rating goes here!
            </div>
            <p>{props.data.likes}</p>
        </div> */}

// firstName: {type: String},
// //userIcon: {type: String},
// // userName: {type: String, unique: true},
// email: {type: String, required: true, unique: true},
// password: {type: String, required: true, select: false},
// bio: {type: String},
// reviews:[{type: Schema.Types.ObjectId, ref:'Review'}],
// follows: [{type: Schema.Types.ObjectId,ref: "User"}],
// //NOTE THE COMMENTS KEY REFERS TO REVIEWS YOU HAVE COMMENTED ON, NOT THE COMMENTS THEMSELVES. (CAN'T DO THE COMMENTS UNLESS WE MAKE A NEW REFERENCED SCHEMA)
// comments:[{type: Schema.Types.ObjectId,ref: "Review"}],