import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { create } from '../../../services/albumService';

function CreateAlbum() {
    const navigate = useNavigate();

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
                <input id="name" name="name" className="name" type="text" placeholder="Album name" />
                <label for="imgUrl" className="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" className="imgUrl"  type="text" placeholder="Image Url" />
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

    )
}

export default CreateAlbum;