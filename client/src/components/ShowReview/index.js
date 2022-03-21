import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";

export default function MakeReview({checkUserActive}) {
    const navigate = useNavigate();
    const [ review, setReview ] = useState({
        link: "https://picsum.photos/200?grayscale",
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

    return(
        <div> 
            <h1>Show Review</h1>
            
        </div>
    )
}