import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import apiClient from "../../api/axios.config";


export default function MakeReview() {
    const [ review, setReview ] = useState({});
    const navigate = useNavigate();
    const currentUserID = JSON.parse(`${localStorage.getItem("userID")}`);


	const getReviewData = async () => {
		await apiClient.get(`/api/review/${window.location.pathname.split("/")[2]}`).then((res)=>{
			setReview(res.data.data);
		})
	}

    const checkImage = () => {
        if(!review.linkIsImage){
            return <a id="reviewItem-link" href={review.link} target="_blank" rel="noreferrer">{review.reviewItem}</a>
        } else {
            return <img src={review.link} alt="review-item"/>
        }
    }

    const reviewItem = () => {
        if(!review.linkIsImage){
            return 
        } else {
            return (<h4>{review.reviewItem}</h4>)
        }
    }
  
    const handleEdit = () => {
        return navigate('edit')
    }

    useEffect(() => {
		getReviewData();
	}, []);

    useEffect(() => {
		
	}, [review]);

    if(currentUserID === review.user){
        return (
            <div className="showReview"> 
                <div className="image">
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
    } else {
        return (
            <div className="showReview"> 
                <div className="image">
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
            </div>
        )
    }
}