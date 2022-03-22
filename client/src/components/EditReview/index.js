import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import apiClient from "../../api/axios.config";
import * as reviewService from "../../api/review.service";


export default function EditReview() {
    const navigate = useNavigate();

    let [review, setReview] = useState({
        link: "https://picsum.photos/500?grayscale",
        reviewItem: "Review Item-",
        title: "Title-",
        category: "People",
        body: "body-",
        rating: 3,
        user: "",
    });

    const getReview = async () => {
		await apiClient.get(`/api/review/${window.location.pathname.split("/")[2]}/edit`).then((res)=>{
			setReview(res.data.data);
            
		})
	}

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(Object.values(review).includes("") || Object.values(review).includes(undefined)){
            alert("Please fill out all fields");
        }else if (review.rating > 5 || review.rating < 0){
            alert("Please rate the noun from 0-5.");
        } else if (review.category === "Please Select") {
            alert("Please select a category.");
        } else {
            await reviewService.create(review)
                .then((createdReview) => {
                    console.log(createdReview);
                    setReview(prevreview => {
                        return {
                            ...prevreview, 
                            link: "https://picsum.photos/500?grayscale",
                            reviewItem: "",
                            title: "",
                            category: "",
                            body: "",
                            rating: undefined,
                            user: ""
                        }
                    })
                    navigate(`/review/${createdReview.data.data._id}`)
                })
        };
    };

    const changeLink = () => {
        setReview(prevData => {
            if(!prevData.link.includes("jpg") && !prevData.link.includes("png")){
                return {
                    ...prevData, 
                    link: "https://picsum.photos/500?grayscale"
                }
            } else {
                return {
                    ...prevData, 
                    link: prevData.link
                }
            }
        })}

    useEffect(() => {
        getReview();
    }, []);

    return(
        <div className="showReview"> 
            <div className="image">
                <img  id="image" src={review.link} alt="item_image"/>
                <a id="reviewItem-link" href={review.link} target="_blank" rel="noreferrer">{review.reviewItem}</a>
            </div>
            <form>
            <label>
                <br/>
                    <label>Image URL </label>
                    <label className="switch">
                    <input 
                        onChange={(e) => {
                            if(e.target.checked){
                                document.querySelector('#image').style.display = 'none';
                                document.querySelector('#reviewItem-link').style.display = 'block';
                            } else {
                                document.querySelector('#reviewItem-link').style.display = 'none';
                                document.querySelector('#image').style.display = 'block';
                                changeLink();
                            };
                        }} 
                        id="slider" 
                        type="checkbox"/>
                    <span className="slider round"></span>
                    </label>
                    <label> Web Link</label>
                    <br/>
                    <input 
                    onChange={(e) => {
                            setReview(prevreview => {
                                return {
                                    ...prevreview, 
                                    link: e.target.value
                                }
                            })}}
                    value={review.link}
                    type="text" 
                    name="link"
                    id="link"
                    /> 
                </label><br/>
                <label> 
                Title*
                <br/>
                    <input 
                    onChange={(e) => setReview(prevreview => {
                        return {
                            ...prevreview, 
                            title: e.target.value
                        }
                    })}
                    type="text" 
                    name="title"
                    value={review.title}
                    placeholder="Add title here."
                    />
                </label><br/>
                <label> 
                Review Item*
                <br/>
                    <input 
                    onChange={(e) => setReview(prevreview => {
                        return {
                            ...prevreview, 
                            reviewItem: e.target.value
                        }
                    })}
                    type="text" 
                    name="reviewItem"
                    value={review.reviewItem}
                    placeholder="Add item here"
                    />
                </label><br/>
                <label htmlFor="selector"> 
                Category*
                <br/>
                    <select id="selector"
                    onChange={(e) => setReview(prevreview => {
                        return {
                            ...prevreview, 
                            category: e.target.value
                        }
                    })}
                    name="category"
                    value={review.category}
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
                    onChange={(e) => setReview(prevreview => {
                        return {
                            ...prevreview, 
                            body: e.target.value
                        }
                    })}
                    value={review.body}
                    placeholder="Please write reiew here."
                    ></textarea>
                </label><br/>
                <label> 
                Rating (0-5)*
                <br/>
                    <input 
                    type="text" 
                    name="rating"
                    onChange={(e) => setReview(prevreview => {
                        return {
                            ...prevreview, 
                            rating: e.target.value
                        }
                    })}
                    value={review.rating}
                    placeholder="Please rate between 0-5"
                    />
                </label><br/>
            </form>
            <button onClick={handleSubmit}>Update</button>
        </div>
    )
}