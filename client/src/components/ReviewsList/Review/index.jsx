import apiClient from "../../../api/axios.config";
import { useEffect, useState } from "react";
function Review (props) {
    /* const [user, setUser] = useState({});

    const getUser = async () => {
		await apiClient.get(`/api/user/${props.data.user}`).then((res)=>{
            setUser(res.data.data);
		})
	} */

    // function getUser () {
    //     console.log(props.data.user);
    // }

   /*  useEffect(() => {
		getUser();
	}, []);
 */
    return(
        <div>
            <h3>{props.data.title}</h3>
            <h5>{props.data.reviewItem}</h5>
            <h5>{props.data.category}</h5>
            {/* <h5>Name: {user.firstName}</h5> */}
            <p>{props.data.body}</p>
            <div>
                star rating goes here!
            </div>
            <p>{props.data.likes}</p>
        </div>
    );
}

export default Review;