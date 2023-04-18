import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
const ProtectedRouteComponents = ({ admin }) => {
    if (admin) {
        let adminAuth = true;
        return adminAuth ? <Outlet /> : <Navigate to="/Login" />            //if true go to given url else navigate to login page
    }
    else {
        let userAuth = true;
        return userAuth ? <><UserChatComponent /><Outlet /></> : <Navigate to="/Login" />
    }
}
export default ProtectedRouteComponents;