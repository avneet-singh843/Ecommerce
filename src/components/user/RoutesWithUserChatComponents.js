import { Outlet } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";
const RoutesWithUserChatComponents = () => {
    return (
        <>
            <UserChatComponent /><Outlet />
        </>
    );
};
export default RoutesWithUserChatComponents; 