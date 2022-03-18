import * as reviewService from "../../api/review.service"
import apiClient from "../../api/axios.config";
import { useEffect, useState } from "react";
 
function ReviewsList(){
	
	const [title, setTitle] = useState("");

	const getReviews = async (e) => {
		e.preventDefault();
		await apiClient.get('/api/review').then((res)=>{
			console.log (res);
		})
	}

	return(
		<button onClick={getReviews}>Get Reviews</button>
	);
}
export default ReviewsList;