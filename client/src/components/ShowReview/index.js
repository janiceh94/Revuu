import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";

export default function MakeReview({checkUserActive}) {
    const navigate = useNavigate();
    const [ review, setReview ] = useState({
        imageLink: "https://picsum.photos/200?grayscale",
        webLink: "",
        reviewItem: "Shoes",
        title: "I hate these Shoes",
        category: "Clothing",
        body: "OMG THESE SHEEEWWWWWSSSSS",
        rating: undefined,

    });

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
            <h3>{reviewItem()}</h3>
            


        </div>
    )
}