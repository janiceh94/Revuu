import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";

export default function Reviews() {
	const [reviews, setReviews] = useState([]);

	const fetchReviews = async () => {
		await apiClient.get(`/api/review`)
		.then((res) => {
			setReviews(res.data.data);
		});
	};

	useEffect(() => {
		fetchReviews();
	}, []);

	return (
		<div>
			<h1>Reviews</h1>
			{reviews.map((review, i) => {
				return <h3 key={i}>{review.reviewItem}</h3>;
			})}
		</div>
	);
}