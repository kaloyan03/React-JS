import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
        <img src="./images/headphones.png" />
        <Link to="/">Home</Link>
        <ul>
            <Link to="/albums">Catalog</Link>
            <Link to="/albums/search">Search</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/albums/create">Create Album</Link>
            <Link to="/logout">Logout</Link>
            {/* <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Create Album</a></li>
            <li><a href="#">Logout</a></li> */}
        </ul>
    </nav>
    )
}

export default Header;