import { useParams } from "react-router-dom";




function Profile() {
    // const {username ,id} = useParams();
    const {id , username} = useParams();
    // const params = useParams();
    return(
        <div>
            <h1>This Is Profile Page</h1>
            <h4>//**username: {username}**//**id: {id}**//</h4>  
         
                {/* <p>{params.username} {params.id}</p> */}
        </div>
    )
}
export default Profile;