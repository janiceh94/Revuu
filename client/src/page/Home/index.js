import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
import * as reviewService from '../../api/review.service';
import {useNavigate} from 'react-router-dom';


export default function Home() {
	const [reviews, setReviews] = useState([]);

	const navigate = useNavigate();

	const fetchReviews = async () => {
		await apiClient.get(`/api/review`)
		.then((res) => {
			setReviews(res.data.data.reverse());
		});
	};

	const reviewId = async (id) => {
		navigate(`/review/${id}`);
	}

	useEffect(() => {
		fetchReviews();
	}, []);

	return (
		<div>
			<h1>Home</h1>
			{reviews.map((review, i) => {
				return <h3 key={i}>{review.reviewItem}
				<div>
				<button onClick = {() => reviewId(review._id)}>View Review</button>
				</div>
				</h3>;
			})}
		</div>
	);
}