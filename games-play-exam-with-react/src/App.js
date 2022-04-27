import WelcomeWorld from "./components/WelcomeWorld";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import GameDetails from "./components/GameDetails";
import EditGame from "./components/EditGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog";

import { useState } from "react";



const router = {
  '/welcome-world': <WelcomeWorld />,
  '/create-game': <CreateGame />,
  '/game-details': <GameDetails />,
  '/edit-game': <EditGame />,
  '/login': <Login />,
  '/register': <Register />,
  '/games': <GameCatalog />,
};


function App() {
  const [page, setPage] = useState('/welcome-world');

  const navigationChangeHandler = (path) => {
    setPage(path);
  };

  return (
    <div className="App">
      <Header navigationChangeHandler={navigationChangeHandler}></Header>


      <main>
        {router[page] || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
