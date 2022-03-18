import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
import Review from "./Review"
 
function ReviewsList(){
	
	const [reviews, setReviews] = useState([]);

	const getReviews = async (e) => {
		e.preventDefault();
		await apiClient.get('/api/review').then((res)=>{
			// console.log (res.data.data);
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
				return(
					<Review key={i} data={review}/>
				);
			})}
		</div>
	);
}
export default ReviewsList;