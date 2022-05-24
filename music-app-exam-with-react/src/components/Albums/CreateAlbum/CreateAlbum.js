import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { create } from '../../../services/albumService';

function CreateAlbum() {
    const navigate = useNavigate();

    let [albumName, setAlbumName] = useState('');
    let [albumImgUrl, setAlbumImgUrl] = useState('');
    let [albumPrice, setAlbumPrice] = useState('');
    let [albumReleaseDate, setAlbumReleaseDate] = useState('');
    let [albumArtist, setAlbumArtist] = useState('');
    let [albumGenre, setAlbumGenre] = useState('');
    let [albumDescription, setAlbumDescription] = useState('');

    const albumNameOnChangeHandler = (e) => {
        let albumNameNewValue = e.target.value;
        setAlbumName(albumNameNewValue);
    }

    const albumImgUrlOnChangeHandler = (e) => {
        let albumImgUrlNewValue = e.target.value;
        setAlbumImgUrl(albumImgUrlNewValue);
    }

    const albumPriceOnChangeHandler = (e) => {
        let albumPriceNewValue = e.target.value;
        setAlbumPrice(albumPriceNewValue);
    }

    const albumReleaseDateOnChangeHandler = (e) => {
        let albumReleaseDateNewValue = e.target.value;
        setAlbumReleaseDate(albumReleaseDateNewValue);
    }

    const albumArtistOnChangeHandler = (e) => {
        let albumArtistDateNewValue = e.target.value;
        setAlbumArtist(albumArtistDateNewValue);
    }

    const albumGenreOnChangeHandler = (e) => {
        let albumGenreNewValue = e.target.value;
        setAlbumGenre(albumGenreNewValue);
    }

    const albumDescriptionOnChangeHandler = (e) => {
        let albumDescriptionNewValue = e.target.value;
        setAlbumDescription(albumDescriptionNewValue);
    }

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        let formElement = e.target;

        let formData = new FormData(formElement);
        
        const newAlbum = {
            'name': formData.get('name'),
            'artist': formData.get('artist'),
            'genre': formData.get('genre'),
            'imgUrl': formData.get('imgUrl'),
            'price': formData.get('price'),
            'releaseDate': formData.get('releaseDate'),
            'description': formData.get('description'),
        }

        create(newAlbum)
        .then(albumResult => {
            navigate(`/albums`)
        })
    
    }


    return (
        <section className="createPage">
    <form onSubmit={onSubmitFormHandler}>
        <fieldset>
            <legend>Add Album</legend>

            <div className="container">
                <label for="name" className="vhide">Album name</label>
                <input id="name" name="name" className="name" type="text" value={albumName} onChange={albumNameOnChangeHandler} placeholder="Album name" />
                <label for="imgUrl" className="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" className="imgUrl" value={albumImgUrl} onChange={albumImgUrlOnChangeHandler} type="text" placeholder="Image Url" />
                <label for="price" className="vhide">Price</label>
                <input id="price" name="price" className="price" type="text" value={albumPrice} onChange={albumPriceOnChangeHandler} placeholder="Price" />
                <label for="releaseDate" className="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" className="releaseDate" value={albumReleaseDate} onChange={albumReleaseDateOnChangeHandler} type="text" placeholder="Release date" />
                <label for="artist" className="vhide">Artist</label>
                <input id="artist" name="artist" className="artist" type="text" value={albumArtist} onChange={albumArtistOnChangeHandler} placeholder="Artist" />
                <label for="genre" className="vhide">Genre</label>
                <input id="genre" name="genre" className="genre" type="text" value={albumGenre} onChange={albumGenreOnChangeHandler} placeholder="Genre" />
                <label for="description" className="vhide">Description</label>
                <textarea name="description" className="description" value={albumDescription} onChange={albumDescriptionOnChangeHandler} placeholder="Description"></textarea>

                <button className="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>

    )
}

export default CreateAlbum;