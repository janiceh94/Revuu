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
                })
    };

    const navigate=useNavigate();
  
    const handleEdit = () => {
        return navigate('edit')
    }

    useEffect(() => {

		getReviewData();
	}, []);

    return(
        <div> 
            {/* <h1>Show Review</h1>
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
            <h2>{review.title}</h2>
            {reviewItem()}
            <h4>Category:<br/>{review.category}</h4>
            <p>Description:<br/>{review.body}</p>
            <h4>Rating:<br/>{review.rating}</h4> */}
        </div>
    )

}