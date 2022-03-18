import { useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as authService from "../../api/auth.service";
import * as reviewService from "../../api/review.service";

const reducer = (prevState, action) => {
	switch(action.type) {
		case "setReviews":
			return {...prevState, reviews: action.payload};
		case "setIsLoggedIn":
			return {...prevState, isLoggedIn: action.payload};
		default: 
			return prevState
	}
}

const initialState = {
	isLoggedIn: false,
	reviews: []
}

const Landing = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { reviews, isLoggedIn } = state;

	const fetchReviews = async () => {
		await reviewService.getAll().then((res) => {
			dispatch({ type: "setReviews", payload: res.data.data.reverse() })
		});
	};

	const checkLogin = () => {
		if(authService.currentUser()) {
			dispatch({type: "setIsLoggedIn", payload: true})
		}else {
			dispatch({type: "setIsLoggedIn", payload: false})
		}
	}

	useEffect(() => {
		fetchReviews();
		checkLogin();
	}, []);

	if (isLoggedIn) {
		return (
			<>
				<Routes>
					<Route path="Home" element={<Home />}></Route>
	
					<Route
						path="/"
						element={
							<>
								{reviews.map((user, i) => {
									return (
                                        <h3 key={i}>{review.reviewItem}</h3>
									);
								})}
							</>
						}
					></Route>
				</Routes>
			</>
		);
	} else {
		return(
			<div>
				<Landing checkUserActive={() => dispatch({type: "setIsLoggedIn", payload: true})}/>
			</div>

		)
	}
	
};

export default Landing;
