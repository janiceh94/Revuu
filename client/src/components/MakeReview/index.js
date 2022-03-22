import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";


export default function MakeReview() {
    const navigate = useNavigate();
    let userID = JSON.parse(`${localStorage.getItem("userID")}`);

    let [data, setData] = useState({
        link: "",
        reviewItem: "",
        title: "",
        category: "",
        body: "",
        rating: undefined,
        user: `${userID}` 
    });

    const getImageUrl = async() => {
        await axios.get("https://picsum.photos/500?grayscale")
                .then((response) => {
                    setData(prevData => {
                        return {
                            ...prevData, 
                            link: response.request.responseURL
                        }
                    })
                })
    }

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
                .then((createdReview) => {
                    console.log(createdReview);
                    setData(prevData => {
                        return {
                            ...prevData, 
                            link: "",
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


    useEffect(() => {
        getImageUrl();
    }, []);

    return(
        <div className="showReview"> 
            <div className="image">
                <img id="image" src={data.link} alt="item_image"/>
                <a id="reviewItem-link" href={data.link} target="_blank" rel="noreferrer">{data.reviewItem}</a>
            </div>
            <form id="editForm">
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
                            setData(prevData => {
                                return {
                                    ...prevData, 
                                    link: e.target.value
                                }
                            })}}
                    value={data.link}
                    type="text" 
                    name="link"
                    id="link"
                    /> 
                </label><br/>
                <label> 
                Title*
                <br/>
                    <input 
                    onChange={(e) => setData(prevData => {
                        return {
                            ...prevData, 
                            title: e.target.value
                        }
                    })}
                    type="text" 
                    name="title"
                    value={data.title}
                    placeholder="Add title here."
                    maxLength="60"
                    />
                </label><br/>
                <label> 
                Review Item*
                <br/>
                    <input 
                    onChange={(e) => setData(prevData => {
                        return {
                            ...prevData, 
                            reviewItem: e.target.value
                        }
                    })}
                    type="text" 
                    name="reviewItem"
                    value={data.reviewItem}
                    placeholder="Add item here"
                    maxLength="60"
                    />
                </label><br/>
                <label htmlFor="selector"> 
                Category*
                <br/>
                    <select id="selector"
                    onChange={(e) => setData(prevData => {
                        return {
                            ...prevData, 
                            category: e.target.value
                        }
                    })}
                    name="category"
                    > 
                        <option>Please Select</option> 
                        <option>Restaurants</option>
                        <option>Tech Products</option>
                        <option>Cooking Gadgets</option>
                        <option>Food/Drink</option>
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
                        <option>Other</option>
                    </select>
                </label><br/>
                <label> 
                Review*
                <br/>
                    <textarea 
                    type="text" 
                    name="body"
                    onChange={(e) => setData(prevData => {
                        return {
                            ...prevData, 
                            body: e.target.value
                        }
                    })}
                    value={data.body}
                    placeholder="Please write reiew here."
                    ></textarea>
                </label><br/>
                <label> 
                Rating (0-5)*
                <br/>
                    <input 
                    type="text" 
                    name="rating"
                    onChange={(e) => setData(prevData => {
                        return {
                            ...prevData, 
                            rating: e.target.value
                        }
                    })}
                    value={data.rating}
                    placeholder="Please rate between 0-5"
                    />
                </label><br/><br/>
            </form>
            <button onClick={handleSubmit}>Publish</button>
        </div>
    )
}