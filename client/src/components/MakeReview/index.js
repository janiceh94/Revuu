import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import * as reviewService from "../../api/review.service";
import FakePage from '../FakePage';

export default function MakeReview({checkUserActive}) {
    const navigate = useNavigate();

    let [data, setData] = useState({
        link: "https://picsum.photos/500?grayscale",
        reviewItem: "",
        title: "",
        category: "",
        body: "",
        rating: undefined,
        user: ""
    });

    const handleSubmit = async(e, req) => {
        e.preventDefault();
        console.log(req.body)
        // if(Object.values(data).includes("") || Object.values(data).includes(undefined)){
        //     alert("Please fill out all fields");
        // }else if (data.rating > 5 || data.rating < 0){
        //     alert("Please rate the noun from 0-5.");
        // } else if (data.category === "Please Select") {
        //     alert("Please select a category.");
        // } else {
        //     console.log(data.rating)
        //     console.log(data)
        //     await reviewService.create(data)
        //         .then((err, createdReview)=> {
        //             //console.log(createdReview);
        //             // {checkUserActive()}
        //             setData({webLink: ""});
        //             setData({imageLink: ""});
        //             setData({reviewItem: ""});
        //             setData({title: ""});
        //             setData({category: ""});
        //             setData({body: ""});
        //             setData({rating: undefined});
        //             setData({user: ""});
        //         })
        // };
    };

    // useEffect(() => {
	// 	setData(prevData => {
    //        return {
    //         ...prevData,
    //         imageLink: "https://picsum.photos/500?grayscale"
    //        }
    //     });
	// }, []);
    const changeLink = () => {
        setData(prevData => {
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

    return(
        <div> 
            <img id="image" src={data.link} alt="item_image"/>
            <a id="reviewItem-link" href={data.link} target="_blank" rel="noreferrer">{data.reviewItem}</a>
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
                    />
                </label><br/>
                <label for="selector"> 
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
                </label><br/>
                <input type="hidden" value=""/> 
            </form>
            <button onClick={handleSubmit}>Publish</button>
        </div>
    )
}