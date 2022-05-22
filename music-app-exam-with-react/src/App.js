import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import ListAlbums from './components/ListAlbums';
import EditAlbum from './components/EditAlbum'
import CreateAlbum from './components/CreateAlbum'
import AlbumDetails from './components/AlbumDetails'
import Search from './components/Search';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/albums' element={<ListAlbums />} />
          <Route path='/albums/create' element={<CreateAlbum />} />
          <Route path='/albums/:id' element={<AlbumDetails />} />
          <Route path='/albums/edit/:id' element={<EditAlbum />} />
          <Route path='/albums/search' element={<Search />} />
        </Routes>
      </BrowserRouter>

      <Footer />



    </div>


  );
}

export default App;
