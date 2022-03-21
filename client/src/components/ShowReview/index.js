import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import apiClient from '../../api/axios.config';

export default function ShowReview() {
    const navigate  = useNavigate();
    let currentUserID = JSON.parse(`${localStorage.getItem("userID")}`);
    const [review, setReview] = useState({
        link: "https://picsum.photos/500?grayscale",
        reviewItem: "Review Item-",
        title: "Title-",
        category: "Category-",
        body: "body-",
        rating: 3,
        user: "6237ecb0df4acbfe23cc5ae7" //test@test.com
    });

	const getReview = async () => {
		await apiClient.get(`/api/review/${window.location.pathname.split("/")[2]}`).then((res)=>{
            console.log("reviewID:", window.location.pathname.split("/")[2]);
            console.log("res.data.data: ",res.data.data);
			setReview(res.data.data);
            
		})
	}

    const checkImage = () => {
        if(review.link !== "https://picsum.photos/500?grayscale"){
            return <a href={review.link} target="_blank" rel="noreferrer">{review.reviewItem}</a>
        } else {
            return <img src={review.link} alt="review-item"/>
        }
    }

    const reviewItem = () => {
        if(review.link !== "https://picsum.photos/500?grayscale"){
            return 
        } else {
            return (<h4>{review.reviewItem}</h4>)
        }
    }

    const handleEdit = () => {
        return navigate('edit')
    }

    useEffect(() => {
		getReview();
	}, []);

    if(currentUserID === review.user){
        return (
            <div id="showReview"> 
                <div id="image">
                    {checkImage()}
                </div>
                <h2>{review.title}</h2>
                {reviewItem()}
                <h4>Category:
                <p>{review.category}</p>
                </h4>
                <h4>Description:
                <p>{review.body}</p>
                </h4>
                <h4>Rating:
                <p>{review.rating}</p>
                </h4>
                <button>Edit</button>
            </div>
        )
    } else {
        return(
            <div id="showReview"> 
                <div id="image">
                    {checkImage()}
                </div>
                <h2>{review.title}</h2>
                {reviewItem()}
                <h4>Category:
                <p>{review.category}</p>
                </h4>
                <h4>Description:
                <p>{review.body}</p>
                </h4>
                <h4>Rating:
                <p>{review.rating}</p>
                </h4>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )
    }
}