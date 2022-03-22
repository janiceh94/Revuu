import apiClient from "../../../api/axios.config";
import { useEffect, useState } from "react";
function Review (props) {

    const checkImage = () => {
        if(!props.data.linkIsImage){
            return <a id="reviewItem-link" href={props.data.link} target="_blank" rel="noreferrer">{props.data.reviewItem}</a>
        } else {
            return <img src={props.data.link} alt="review-item"/>
        }
    }

    return(
        <div className='reviewCard'>
            <h3>{props.data.title}</h3>
            {checkImage()}
            <h5>Review Item: <br/>{props.data.reviewItem}</h5>
            <h5>Category: <br/>{props.data.category}</h5>
        </div>
    );
}

export default Review;