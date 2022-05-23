import { clearStorage } from "../../utils";

import { Navigate } from "react-router-dom";

const Logout = ({
    onLogout,
}) => {

    // onLogout();
    clearStorage();
    
    return (
        <Navigate to='/auth/login' replace={true} />
    )
};

export default Logout;