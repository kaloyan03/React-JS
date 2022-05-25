import { useEffect, useState } from "react";
import { searchAlbum } from "../../services/albumService";

function Search() {

    let [searchedAlbums, setSearchedAlbums] = useState([]);
    let [searchAlbumsInput, setSearchAlbumsInput] = useState('');

    const searchInputOnChangeHandler = (e) => {
        setSearchAlbumsInput(e.target.value);
    } 

    const searchOnClickHandler = (e) => {
        e.preventDefault();

        if (searchAlbumsInput.trim() == '') {
            alert('Field cannot be empty!');
            return;
        }

        searchAlbum(searchAlbumsInput)
        .then(searchedAlbumsResult => {
            setSearchedAlbums(searchedAlbumsResult);
        })
    }

    return (
        <section id="searchPage">
    <h1>Search by Name</h1>

    <div className="search">
        <input id="search-input" onChange={searchInputOnChangeHandler} type="text" name="search" placeholder="Enter desired albums's name" />
        <button className="button-list" onClick={searchOnClickHandler}>Search</button>
    </div>

    <div className="search-result">
    {searchedAlbums.length !== 0
    ? (
        <>
        <h2>Results:</h2>

        {searchedAlbums.map(a => 
        <div className="card-box">
            <img src={a['imgUrl']} />
            <div>
                <div className="text-center">
                    <p className="name">Name: {a['name']}</p>
                    <p className="artist">Artist: {a['artist']}</p>
                    <p className="genre">Genre: {a['genre']}</p>
                    <p className="price">Price: ${a['price']}</p>
                    <p className="date">Release Date: {a['releaseDate']}</p>
                </div>
                <div className="btn-group">
                    <a href="#" id="details">Details</a>
                </div>
            </div>
        </div>
        )}
        </>
    )
    : <p className="no-result">No result.</p>}
    </ div>
    
</section>
    

    )
}

export default Search;