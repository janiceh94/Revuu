import apiClient from "../../../api/axios.config";
import { useEffect, useState } from "react";
function Review (props) {
    const [user, setUser] = useState({});

    const getUser = async () => {
        //console.log(props.data.user)
		await apiClient.get(`/api/user/${props.data.user}`).then((res)=>{
            setUser(res.data.data);
            console.log(res.data.data)
		})
	}

   useEffect(() => {
		getUser();
	}, []);

    return(
        <div>
            <h3>{props.data.title}</h3>
            <h5>{props.data.reviewItem}</h5>
            <h5>{props.data.category}</h5>
            {/* <h5>Name: {user.email}</h5> */}
            <p>{props.data.body}</p>
            <div>
                star rating goes here!
            </div>
            <p>{props.data.likes}</p>
        </div>
    );
}

export default Review;