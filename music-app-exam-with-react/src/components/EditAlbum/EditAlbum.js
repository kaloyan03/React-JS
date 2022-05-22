function EditAlbum() {
    return (
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

    )
}

export default EditAlbum;