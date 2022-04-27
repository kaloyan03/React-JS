function Header({
    navigationChangeHandler,
}) {
    const onHeaderClickHandler = (e) => {
        e.preventDefault();
    
        if (e.target.tagName != 'A') {
            return;
        }
    
        let url = new URL(e.target.href);
    
        navigationChangeHandler(url.pathname);
    };

    return (
        <header onClick={onHeaderClickHandler}>
            <h1><a className="home" href="/welcome-world">GamesPlay</a></h1>
            <nav>
                <a href="/games">All games</a>
                <div id="user">
                    <a href="/create-game">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;