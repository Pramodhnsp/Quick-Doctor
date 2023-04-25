import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const Protect = ({child, userdetails}) => {

    return ( 
        <>
        {userdetails ? (child) : (<Navigate to='/Login' replace/>)}
        </>
     );
}

let mapStateToProps=(state)=>{
    return{userdetails: state.user}
}
 
export default connect(mapStateToProps) (Protect);