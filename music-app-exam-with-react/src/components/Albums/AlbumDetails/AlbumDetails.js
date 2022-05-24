import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../../../services/albumService';

import { Link } from 'react-router-dom';

function AlbumDetails() {
    let params = useParams();
    let albumId = params['albumId'];

    let [album, setAlbum] = useState({});


    useEffect(() => {
        getOne(albumId)
        .then(albumResult => {
            setAlbum(albumResult);
        })
    }, [])

    return (
        <section id="detailsPage">
        <div className="wrapper">
            <div className="albumCover">
                <img src={album['imgUrl']} />
            </div>
            <div className="albumInfo">
                <div className="albumText">
    
                    <h1>Name: {album['name']}</h1>
                    <h3>Artist: {album['artist']}</h3>
                    <h4>Genre: {album['genre']}</h4>
                    <h4>Price: ${album['price']}</h4>
                    <h4>Date: {album['releaseDate']}</h4>
                    <p>Description: {album['description']}</p>
                </div>
    
                <div className="actionBtn">
                    <Link to={'/albums/edit/' + album['_id']} className="edit">Edit</Link>
                    <Link to={'/albums/delete/' + album['_id']} className="remove">Delete</Link>
                </div>
            </div>
        </div>
    </section>
    

    )
}

export default AlbumDetails;