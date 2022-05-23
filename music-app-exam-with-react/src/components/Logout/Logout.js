import { clearStorage } from "../../utils";

import { Navigate } from "react-router-dom";

const Logout = ({
    onLogout,
}) => {
    clearStorage();
    onLogout();
    
    return (
        <Navigate to='/auth/login' />
    )
};

export default Logout;