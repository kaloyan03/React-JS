import { Link } from 'react-router-dom';

function Header({
    isAuthenticated,
    userData,
}) {
    let guestNavigation = (
        <>
        <Link to="/albums">Catalog</Link>
        <Link to="/albums/search">Search</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">Register</Link>
        </>
    )

    let userNavigation = (
        <>
        <Link to="/albums">Catalog</Link>
        <Link to="/albums/search">Search</Link>
        <Link to="/albums/create">Create Album</Link>
        <Link to="/auth/logout">Logout</Link>
        </>
    )


    return (
        <nav>
        <img src="./images/headphones.png" />
        <Link to="/">Home</Link>
        <ul>
            {isAuthenticated 
            ? userNavigation 
            : guestNavigation
            }
        </ul>
    </nav>
    )
}

export default Header;