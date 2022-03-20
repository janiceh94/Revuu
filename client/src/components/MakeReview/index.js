import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import * as reviewService from "../../api/review.service";

export default function MakeReview({checkUserActive}) {
    const navigate = useNavigate();
    const [ data, setData ] = useState({
        image: "https://picsum.photos/500?grayscale",
        reviewItem: "",
        title: "",
        category: "",
        body: "",
        rating: undefined,
        user: ""
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("here");
        if(Object.values(data).includes("") || Object.values(data).includes(undefined)){
            alert("Please fill out all fields");
        }else if (data.rating > 5 || data.rating < 0){
            alert("Please rate the noun from 0-5.");
        } else {
            await reviewService.create(data)
                .then((err, createdReview)=> {
                    console.log(createdReview);
                    // {checkUserActive()}
                    setData({reviewItem: ""});
                    setData({title: ""});
                    setData({category: ""});
                    setData({body: ""});
                    setData({rating: undefined});
                    setData({user: ""});
                })
        }
        
    }

    return(
        <div> 
            <img src={data.image} alt="random_image"/>
            <form>
            <label>
                Please add an image URL or we will use the image above:
                <br/>
                    <input 
                    onChange={(e) => setData({image: e.target.value})}
                    type="text" 
                    name="image"
                    value={data.image}
                    placeholder="Image URL"
                    /> 
                </label><br/>
                <label>
                Noun*
                <br/>
                    <input 
                    onChange={(e) => setData({reviewItem: e.target.value})}
                    type="text" 
                    name="reviewItem"
                    value={data.reviewItem}
                    placeholder="Noun*"
                    /> 
                </label><br/>
                <label> 
                Title*
                <br/>
                    <input 
                    onChange={(e) => setData({title: e.target.value})}
                    type="text" 
                    name="title"
                    value={data.title}
                    placeholder="Title*"
                    />
                </label><br/>
                <label> 
                Category*
                <br/>
                    <input 
                    onChange={(e) => setData({category: e.target.value})}
                    type="text" 
                    name="category"
                    value={data.category}
                    placeholder="Category*"
                    /> 
                </label><br/>
                <label> 
                Review*
                <br/>
                    <textarea 
                    type="text" 
                    name="body"
                    onChange={(e) => setData({body: e.target.value})}
                    value={data.body}
                    placeholder="Review*"
                    ></textarea>
                </label><br/>
                <label> 
                Rating (0-5)*
                <br/>
                    <input 
                    type="text" 
                    name="rating"
                    onChange={(e) => setData({rating: e.target.value})}
                    value={data.rating}
                    placeholder="Review*"
                    />
                </label><br/>
                <input type="hidden" value=""/> 
            </form>
            <button onClick={handleSubmit}>Publish</button>
        </div>
    )
}