function AlbumDetails() {
    return (
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
    

    )
}

export default AlbumDetails;