import apiClient from "../../../api/axios.config";
import { useEffect, useState } from "react";
function Review (props) {
    /* const [user, setUser] = useState({});

    const getUser = async () => {
        console.log("props.data.user",props.data.user)
		await apiClient.get(`/api/user/${props.data.user}`).then((res)=>{
            setUser(res.data.data);
            console.log("res",res)
		})
	}

   useEffect(() => {
		getUser();
        console.log(user);
	}, []); */

    return(
        <div className='reviewCard'>
            <h3>{props.data.title}</h3>
            <img src={props.data.link} alt='item-image'/>
            <h5>Review Item: <br/>{props.data.reviewItem}</h5>
            <h5>Category: <br/>{props.data.category}</h5>
        </div>
        // <div className='reviewCard'>
        //     <h3>Title</h3>
        //     <h5>ReviewImage</h5>
        //     <h5>ReviewItem</h5>
        //     <h5>DataCategory</h5>
        //     <h5>Name: Username</h5>
        //     <p>DataBody</p>
        //     <div>
        //         5
        //     </div>
        //     <p>DataLikes</p>
        // </div>
    );
}

export default Review;