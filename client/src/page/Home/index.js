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

	useEffect(() => {
		fetchReviews();
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<h2>Header</h2>
			{reviews.map((review, i) => {
				return <h3 key={i}>{review.reviewItem}
				<button onClick = {review._id}>View Review</button>
				</h3>;
			})}
			<h2>FooterSticky</h2>
			<h2>FooterCR</h2>
		</div>
	);
}