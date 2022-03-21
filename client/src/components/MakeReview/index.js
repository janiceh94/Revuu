import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import * as reviewService from "../../api/review.service";
import FakePage from '../FakePage';

export default function MakeReview({checkUserActive}) {
    const navigate = useNavigate();
    const [ data, setData ] = useState({
        link: "https://picsum.photos/500?grayscale",
        reviewItem: "",
        title: "",
        category: "",
        body: "",
        rating: undefined,
        user: ""
    })


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(Object.values(data).includes("") || Object.values(data).includes(undefined)){
            alert("Please fill out all fields");
        }else if (data.rating > 5 || data.rating < 0){
            alert("Please rate the noun from 0-5.");
        } else if (data.category === "Please Select") {
            alert("Please select a category.");
        } else {
            await reviewService.create(data)
                .then((err, createdReview)=> {
                    //console.log(createdReview);
                    // {checkUserActive()}
                    setData({link: ""});
                    setData({reviewItem: ""});
                    setData({title: ""});
                    setData({category: ""});
                    setData({body: ""});
                    setData({rating: undefined});
                    setData({user: ""});
                })
        };
    };

    return(
        <div> 
            <img id="image" src={data.link} alt="item_image"/>
            <form>
            <label>
                <br/>
                    <label>Image URL </label>
                    <label class="switch">
                    <input 
                         onChange={(e) => {
                            if(e.target.checked){
                                document.querySelector('#image').style.display = 'none';
                            } else {
                                document.querySelector('#image').style.display = 'block';
                            };
                         }} 
                        id="slider" 
                        type="checkbox"/>
                    <span class="slider round"></span>
                    </label>
                    <label> Web Link</label>
                    <br/>
                    <input 
                    onChange={(e) => setData({link: e.target.value})}
                    type="text" 
                    name="link"
                    value={data.link}
                    placeholder="Link"
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
<<<<<<< HEAD
                <label for="selector"> 
=======
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
>>>>>>> 8512f0e0e541eeab996c621597f9a5ac179e9b91
                Category*
                <br/>
                    <select id="selector"
                    onChange={(e) => setData({category: e.target.value})}
                    name="category"
                    > 
                        <option>Please Select</option> 
                        <option>Restaurants</option>
                        <option>Tech Products</option>
                        <option>Cooking Gagets</option>
                        <option>Books</option>
                        <option>Destinations/Landmarks</option>
                        <option>Clothes/Accessories</option>
                        <option>Makeup</option>
                        <option>Movies/TV Shows</option>
                        <option>Delivery Services</option>
                        <option>Repair Services</option>
                        <option>Videos/Streams</option>
                        <option>Music</option>
                        <option>Videogames</option>
                        <option>Medical/Veterinarian services</option>
                        <option>Plants</option>
                        <option>People</option>
                        <option>Misc</option>
                    </select>
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