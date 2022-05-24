import { Navigate, useParams } from "react-router-dom";
import { deleteAlbum } from '../../../services/albumService';

function DeleteAlbum() {
    const params = useParams();
    const albumId = params['albumId'];

    deleteAlbum(albumId)
    .then(deletedAlbum => {

    })

    return (
        <Navigate to='/albums' replace={true} />
    )
}

export default DeleteAlbum;