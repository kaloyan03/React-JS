function App() {
  return (
    <div className="App">

<header>
    <nav>
        <img src="./images/headphones.png" />
        <a href="#">Home</a>
        <ul>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Create Album</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>
</header>

<main id="main-content"></main>

<section id="welcomePage">
    <div id="welcome-message">
        <h1>Welcome to</h1>
        <h1>My Music Application!</h1>
    </div>

    <div className="music-img">
        <img src="./images/musicIcons.webp" />
    </div>
</section>

<section id="loginPage">
    <form>
        <fieldset>
            <legend>Login</legend>

            <label for="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label for="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" type="password" placeholder="Password" />
            <button type="submit" className="login">Login</button>

            <p className="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>

<section id="registerPage">
    <form>
        <fieldset>
            <legend>Register</legend>

            <label for="email" className="vhide">Email</label>
            <input id="email" className="email" name="email" type="text" placeholder="Email" />
            <label for="password" className="vhide">Password</label>
            <input id="password" className="password" name="password" type="password" placeholder="Password" />
            <label for="conf-pass" className="vhide">Confirm Password:</label>
            <input id="conf-pass" className="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password" />
            <button type="submit" className="register">Register</button>

            <p className="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </fieldset>
    </form>
</section>

<section className="createPage">
    <form>
        <fieldset>
            <legend>Add Album</legend>

            <div className="container">
                <label for="name" className="vhide">Album name</label>
                <input id="name" name="name" className="name" type="text" placeholder="Album name" />
                <label for="imgUrl" className="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" placeholder="Image Url" />
                <label for="price" className="vhide">Price</label>
                <input id="price" name="price" className="price" type="text" placeholder="Price" />
                <label for="releaseDate" className="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" placeholder="Release date" />
                <label for="artist" className="vhide">Artist</label>
                <input id="artist" name="artist" className="artist" type="text" placeholder="Artist" />
                <label for="genre" className="vhide">Genre</label>
                <input id="genre" name="genre" className="genre" type="text" placeholder="Genre" />
                <label for="description" className="vhide">Description</label>
                <textarea name="description" className="description" placeholder="Description"></textarea>

                <button className="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>

<section id="catalogPage">
    <h1>All Albums</h1>

    <div className="card-box">
        <img src="./images/BrandiCarlile.png" />
        <div>
            <div className="text-center">
                <p className="name">Name: In These Silent Days</p>
                <p className="artist">Artist: Brandi Carlile</p>
                <p className="genre">Genre: Low Country Sound Music</p>
                <p className="price">Price: $12.80</p>
                <p className="date">Release Date: October 1, 2021</p>
            </div>
            <div className="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <div className="card-box">
        <img src="./images/pinkFloyd.jpg" />
        <div>
            <div className="text-center">
                <p className="name">Name: The Dark Side of the Moon</p>
                <p className="artist">Artist: Pink Floyd</p>
                <p className="genre">Genre: Rock Music</p>
                <p className="price">Price: $28.75</p>
                <p className="date">Release Date: March 1, 1973</p>
            </div>
            <div className="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <div className="card-box">
        <img src="./images/Lorde.jpg" />
        <div>
            <div className="text-center">
                <p className="name">Name: Melodrama</p>
                <p className="artist">Artist: Lorde</p>
                <p className="genre">Genre: Pop Music</p>
                <p className="price">Price: $7.33</p>
                <p className="date">Release Date: June 16, 2017</p>
            </div>
            <div className="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <p>No Albums in Catalog!</p>

</section>

<section className="editPage">
    <form>
        <fieldset>
            <legend>Edit Album</legend>

            <div className="container">
                <label for="name" className="vhide">Album name</label>
                <input id="name" name="name" className="name" type="text" value="In These Silent Days" />
                <label for="imgUrl" className="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" value="./img/BrandiCarlile.png" />
                <label for="price" className="vhide">Price</label>
                <input id="price" name="price" className="price" type="text" value="12.80" />
                <label for="releaseDate" className="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" value="October 1, 2021" />
                <label for="artist" className="vhide">Artist</label>
                <input id="artist" name="artist" className="artist" type="text" value="Brandi Carlile" />
                <label for="genre" className="vhide">Genre</label>
                <input id="genre" name="genre" className="genre" type="text" value="Low Country Sound Music" />
                <label for="description" className="vhide">Description</label>
                <textarea name="description" className="description" rows="10"
                    cols="10">Upon release, In These Silent Days received positive reviews from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album has an average score of 87 out of 100, which indicates 'universal acclaim'.</textarea>

                <button className="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>

<section id="detailsPage">
    <div className="wrapper">
        <div className="albumCover">
            <img src="./images/Lorde.jpg" />
        </div>
        <div className="albumInfo">
            <div className="albumText">

                <h1>Name: Melodrama</h1>
                <h3>Artist: Lorde</h3>
                <h4>Genre: Pop Music</h4>
                <h4>Price: $7.33</h4>
                <h4>Date: June 16, 2017</h4>
                <p>Description: Melodrama is the second studio album by New Zealand singer-songwriter Lorde.
                    It was released on 16 June 2017 by Lava and Republic Records and distributed through
                    Universal.</p>
            </div>

            <div className="actionBtn">
                <a href="#" className="edit">Edit</a>
                <a href="#" className="remove">Delete</a>
            </div>
        </div>
    </div>
</section>

<section id="searchPage">
    <h1>Search by Name</h1>

    <div className="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" />
        <button className="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <div className="search-result">
        <div className="card-box">
            <img src="./images/BrandiCarlile.png" />
            <div>
                <div className="text-center">
                    <p className="name">Name: In These Silent Days</p>
                    <p className="artist">Artist: Brandi Carlile</p>
                    <p className="genre">Genre: Low Country Sound Music</p>
                    <p className="price">Price: $12.80</p>
                    <p className="date">Release Date: October 1, 2021</p>
                </div>
                <div className="btn-group">
                    <a href="#" id="details">Details</a>
                </div>
            </div>
        </div>

        <p className="no-result">No result.</p>
    </div>
</section>

<footer>
    <div>
        &copy;SoftUni Team 2021. All rights reserved.
    </div>
</footer>
</div>
  );
}

export default App;
