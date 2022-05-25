import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { getOne, update } from '../../../services/albumService';

function EditAlbum() {
    const params = useParams();
    const navigate = useNavigate();

    const albumId = params['albumId'];

    let [album, setAlbum] = useState({});

    useEffect(() => {
        getOne(albumId)
        .then(albumResult => {
            setAlbum(albumResult)
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
                    <input id="name" name="name" className="name" type="text" defaultValue={album['name']} />
                    <label htmlFor="imgUrl" className="vhide">Image Url</label>
                    <input id="imgUrl" name="imgUrl" className="imgUrl" type="text" defaultValue={album['imgUrl']} />
                    <label htmlFor="price" className="vhide">Price</label>
                    <input id="price" name="price" className="price" type="text" defaultValue={album['price']} />
                    <label htmlFor="releaseDate" className="vhide">Release date</label>
                    <input id="releaseDate" name="releaseDate" className="releaseDate" type="text" defaultValue={album['releaseDate']} />
                    <label htmlFor="artist" className="vhide">Artist</label>
                    <input id="artist" name="artist" className="artist" type="text" defaultValue={album['artist']} />
                    <label htmlFor="genre" className="vhide">Genre</label>
                    <input id="genre" name="genre" className="genre" type="text" defaultValue={album['genre']} />
                    <label htmlFor="description" className="vhide">Description</label>
                    <textarea name="description" className="description" rows="10"
                        cols="10" defaultValue={album['description']}></textarea>
    
                    <button className="edit-album" type="submit">Edit Album</button>
                </div>
            </fieldset>
        </form>
    </section>

    )
}

export default EditAlbum;