import apiClient from "../../../api/axios.config";
import { useEffect, useState } from "react";
function Review (props) {
//     const [user, setUser] = useState({});

//     const getUser = async () => {
//         console.log("props.data.user",props.data.user)
// 		await apiClient.get(`/api/user/${props.data.user}`).then((res)=>{
//             setUser(res.data.data);
//             console.log("res.data.data",res.data.data)
// 		})
// 	}

//    useEffect(() => {
// 		getUser();
// 	}, []);

    return(
        // <div>
        //     <h3>{props.data.title}</h3>
        //     <h5>{props.data.reviewItem}</h5>
        //     <h5>{props.data.category}</h5>
        //     <h5>Name: Username</h5>
        //     <p>{props.data.body}</p>
        //     <div>
        //         star rating goes here!
        //     </div>
        //     <p>{props.data.likes}</p>
        // </div>
        <div>
            <h3>Title</h3>
            <h5>ReviewItem</h5>
            <h5>DataCategory</h5>
            <h5>Name: Username</h5>
            <p>DataBody</p>
            <div>
                5
            </div>
            <p>DataLikes</p>
        </div>
    );
}

export default Review;