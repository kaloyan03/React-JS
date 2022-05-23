import Header from './components/Header';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Welcome from './components/Welcome';
import ListAlbums from './components/Albums/ListAlbums';
import EditAlbum from './components/Albums/EditAlbum'
import CreateAlbum from './components/Albums/CreateAlbum'
import AlbumDetails from './components/Albums/EditAlbum'
import Search from './components/Search';
import Footer from './components/Footer';
import Logout from './components/Authentication/Logout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserDataFromStorage } from './utils';

function App() {
  const [userInfo, setUserInfo] = useState({isAuthenticated: false, userData: ''})

  useEffect(() => {
    let userData = getUserDataFromStorage();

    setUserInfo({
      isAuthenticated: Boolean(userData),
      userData,
    })
  }, []);


  const onLogin = (userData) => {
    setUserInfo({
      isAuthenticated: true,
      userData: userData,
    })
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      userData: null,
    })
  }

  const onRegister = (userData) => {
    setUserInfo({
      isAuthenticated: true,
      userData: userData,
    })
  }
  return (
    <div className="App">



      <BrowserRouter>
        <Header {...userInfo} />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/auth/login' element={<Login onLogin={onLogin} />} />
          <Route path='/auth/logout' element={<Logout onLogout={onLogout} />} />
          <Route path='/auth/register' element={<Register onRegister={onRegister} />} />
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
