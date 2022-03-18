import * as reviewService from "../../api/review.service"
import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
 
function ReviewsList(){
	
	const [reviews, setReviews] = useState([]);
	const [title, setTitle] = useState("");

	const getReviews = async (e) => {
		e.preventDefault();
		await apiClient.get('/api/review').then((res)=>{
			console.log (res.data.data);
			setReviews(res.data.data);
		})
	}

	// useEffect(() => {
	// 	getReviews();
	// }, []);

	return(
		<div>
			<button onClick={getReviews}>Get Reviews</button>
			{reviews.map((review, i)=>{
				return<h3 key={i}>{review.title}</h3>;
			})}
		</div>
	);
}
export default ReviewsList;