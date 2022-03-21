import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";

export default function MakeReview() {
    const [ review, setReview ] = useState({});
    const reviewId = window.location.pathname.split("/")[2];

    const getReviewData = async () => {
        await reviewService.get(reviewId)
                .then((err, foundReview) => {
                    setReview(foundReview);
                    console.log("foundReview",foundReview);
                })
    };

    // const checkImage = () => {
    //     if(review.link !== "https://picsum.photos/500?grayscale"){
    //         return <a href={review.link} target="_blank" rel="noreferrer">{review.reviewItem}</a>
    //     } else {
    //         return <img src={review.link} alt="review-item"/>
    //     }
    // }

    // const reviewItem = () => {
    //     if(review.link !== "https://picsum.photos/500?grayscale"){
    //         return 
    //     } else {
    //         return <h3>Review Item:<br/><>{review.reviewItem}</></h3>
    //     }
    // }

    useEffect(() => {
		getReviewData();
	}, []);

    return(
        <div> 
            <h1>Show Review</h1>
            {/* <div id="image">
                {checkImage()}
            </div>
            <h2>{review.title}</h2>
            {reviewItem()}
            <h4>Category:<br/>{review.category}</h4>
            <p>Description:<br/>{review.body}</p>
            <h4>Rating:<br/>{review.rating}</h4> */}
        </div>
    )
}