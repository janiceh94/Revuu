import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";

export default function MakeReview({checkUserActive}) {
    const [ review, setReview ] = useState({});

    const getReviewData = async (req) => {
        await reviewService.get(req.params.id)
                .then((err, foundReview) => {
                    setReview(foundReview);
                })
    };

    useEffect(() => {
		getReviewData();
	}, []);

    const checkImage = () => {
        if(review.webLink === ""){
            return <img src={review.imageLink} />
        } else {
            return <a href={review.webLink} target="_blank" rel="noreferrer">{review.reviewItem}</a>
        }
    }

    const reviewItem = () => {
        if(review.webLink === ""){
            return <>{review.reviewItem}</>
        } else {
            return 
        } 
    }

    return(
        <div> 
            <h1>Show Review</h1>
            <div id="image">
                {checkImage()}
            </div>
            <h2>{review.title}</h2>
            <h3>Review Item:<br/>{reviewItem()}</h3>
            <h4>Category:<br/>{review.category}</h4>
            <p>Description:<br/>{review.body}</p>
            <h4>Rating:<br/>{review.rating}</h4>
        </div>
    )
}