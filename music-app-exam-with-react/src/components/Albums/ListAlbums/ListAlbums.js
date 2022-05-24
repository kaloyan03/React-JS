import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateAlbum from '../CreateAlbum';
import EditAlbum from '../EditAlbum';
import AlbumDetails from '../AlbumDetails/AlbumDetails';
import Search from '../../Search';

import { getAll } from '../../../services/albumService';
import Album from '../Album';


function ListAlbums() {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAll()
            .then(albumsResult => {
                setAlbums(albumsResult);
            })
    }, [])

    return (
        <section id="catalogPage">

            {albums
                ? (
                    <>
                        <h1>All Albums</h1>

                        {albums.map(a => <Album album={a} key={a['_id']} />)}
                    </>
                )
                :
                <p>No Albums in Catalog!</p>
            }


                {/* <Routes>
                    <Route path='/create' element={<CreateAlbum />} />
                    <Route path='/:albumId' element={<AlbumDetails />} />
                    <Route path='/edit/:albumId' element={<EditAlbum />} />
                    <Route path='/search' element={<Search />} />
                </Routes> */}

        </section>
    );
}

export default ListAlbums;