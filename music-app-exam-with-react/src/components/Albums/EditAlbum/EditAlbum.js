import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { getOne, update } from '../../../services/albumService';

function EditAlbum() {
    const params = useParams();
    const navigate = useNavigate();

    const albumId = params['albumId'];

    let [album, setAlbum] = useState({});

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

    useEffect(() => {
        getOne(albumId)
        .then(albumResult => {
            setAlbum(albumResult)
            setAlbumName(albumResult['name']);
            setAlbumImgUrl(albumResult['imgUrl']);
            setAlbumPrice(albumResult['price']);
            setAlbumReleaseDate(albumResult['releaseDate']);
            setAlbumArtist(albumResult['artist']);
            setAlbumGenre(albumResult['genre']);
            setAlbumDescription(albumResult['description']);
        })
    }, [])

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        let formElement = e.target;

        let formData = new FormData(formElement);
        
        const updatedAlbum = {
            'name': formData.get('name'),
            'artist': formData.get('artist'),
            'genre': formData.get('genre'),
            'imgUrl': formData.get('imgUrl'),
            'price': formData.get('price'),
            'releaseDate': formData.get('releaseDate'),
            'description': formData.get('description'),
        }

        update(albumId, updatedAlbum)
        .then(albumResult => {
            navigate(`/albums`)
        })
    
    }




    return (
        <section className="editPage">
        <form onSubmit={onSubmitFormHandler}>
            <fieldset>
                <legend>Edit Album</legend>
    
                <div className="container">
                    <label htmlFor="name" className="vhide">Album name</label>
                    <input id="name" name="name" className="name" type="text" onChange={albumNameOnChangeHandler} value={albumName} />
                    <label htmlFor="imgUrl" className="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" onChange={albumImgUrlOnChangeHandler} value={albumImgUrl} />
                    <label htmlFor="price" className="vhide">Price</label>
                    <input id="price" name="price" className="price" type="text" onChange={albumPriceOnChangeHandler} value={albumPrice} />
                    <label htmlFor="releaseDate" className="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" onChange={albumReleaseDateOnChangeHandler} value={albumReleaseDate} />
                    <label htmlFor="artist" className="vhide">Artist</label>
                    <input id="artist" name="artist" className="artist" type="text" onChange={albumArtistOnChangeHandler} value={albumArtist} />
                    <label htmlFor="genre" className="vhide">Genre</label>
                    <input id="genre" name="genre" className="genre" type="text" onChange={albumGenreOnChangeHandler} value={albumGenre} />
                    <label htmlFor="description" className="vhide">Description</label>
                    <textarea name="description" className="description" rows="10"
                        cols="10" onChange={albumDescriptionOnChangeHandler} value={albumDescription}></textarea>
    
                    <button className="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>

    )
}

export default EditAlbum;