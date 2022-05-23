import { clearStorage } from "../../utils";

import { Navigate } from "react-router-dom";
import { logout } from "../../services/authService";

const Logout = ({
    onLogout,
}) => {

    logout()
    .then(res => {
        clearStorage();
        onLogout();
    })
    
    return (
        <Navigate to='/auth/login' replace={true} />
    )
};

export default Logout;