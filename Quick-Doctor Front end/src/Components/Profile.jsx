import {useSelector, useDispatch} from"react-redux";
import {Link} from "react-router-dom";

const Profile = () => {

    let user = useSelector((state)=>{return state.user});

    return(
        <>
           <div>
             <h1>User Profile Page</h1>
             <h1>Username : {user.username}</h1>
             <h1>Email : {user.email}</h1>
             
           </div>
        </>
    );


    
}
 
export default Profile; 