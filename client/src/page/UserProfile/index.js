import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as reviewService from "../../api/review.service"
import * as authService from "../../api/auth.service"
import apiClient from '../../api/axios.config';
import Review from "../../components/ReviewsList/Review"; 
import axios from 'axios';

export default function UserProfile(){

    const [usr, setUsr] = useState({});
    const [reviews, setReviews] = useState([]);

    const navigate = useNavigate();

    const fetchUser = async () => {
		await authService.getProfile()
		.then((res) => {
			setUsr(res.data.data);
		});
	};

    const fetchReviews = async () => {
		await reviewService.getUserIndex(JSON.parse(localStorage.getItem("userID")))
		.then((res) => {
			setReviews(res.data.data.reverse());
		});
	};

    const reviewRoute = (id) =>{
        navigate(`/review/${id}`);
    }

    const setUserIcon = async() => {
        await axios.get("https://picsum.photos/500")
                .then((response) => {
                    if(!usr.userIcon || usr.userIcon === ""){
                        setUsr(prevData => {
                            return {
                                ...prevData, 
                                userIcon: response.request.responseURL
                            }
                        })
                        return usr.Icon
                    } else {
                        return usr.Icon
                    }
                });
        
    }

    useEffect(() => {
        fetchUser()
        fetchReviews()
        setUserIcon()
	}, []);

    useEffect(() => {
	}, [usr, reviews]);

    return(
        <div id="userPage">
            <div id="userProfile">
                <h3>{usr.firstName}</h3>
                <img src={usr.userIcon}/>
                <p>{usr.email}</p>
                <p id="bio">{usr.bio}</p>
            </div>
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