import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
import Review from "./Review"
import {useNavigate} from 'react-router-dom';
 
function ReviewsList(){
	
	const [reviews, setReviews] = useState([]);

	const navigate = useNavigate();

	const fetchReviews = async () => {
		await apiClient.get(`/api/review`)
		.then((res) => {
			setReviews(res.data.data.reverse());
		});
	};

	const reviewId = async (id) => {
		console.log('reviewId:')
		navigate(`/review/${id}`);
	}

	useEffect(() => {
		fetchReviews();
	}, []);

	return(
		<div>
			{/* <Review/>
			<Review/>
			<Review/> */}

			{reviews.map((review, i)=>{
				return(
					<div /* onClick = {() => reviewId(review._id)} */>
					<Review key={i} data={review}/>
					<button id='homebtn' onClick = {() => reviewId(review._id)}>View Review</button>
					</div>
				);
			})}
		</div>
	);
}
export default ReviewsList;