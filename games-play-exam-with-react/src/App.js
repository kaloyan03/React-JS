import WelcomeWorld from "./components/WelcomeWorld";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import GameDetails from "./components/GameDetails";
import EditGame from "./components/EditGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/gameCatalog/GameCatalog";

import { useState } from "react";

function App() {
  const [page, setPage] = useState('/welcome-world');

  const navigationChangeHandler = (path) => {
    setPage(path);
  };


  const router = (path) => {
    let pathNames = path.split('/');
    let rootPath = pathNames[1]; 
    let argument = pathNames[2];
    
    const routes = {
      'welcome-world': <WelcomeWorld />,
      'create-game': <CreateGame />,
      'game-details': <GameDetails id={argument} />,
      'edit-game': <EditGame />,
      'login': <Login />,
      'register': <Register />,
      'games': <GameCatalog navigationChangeHandler={navigationChangeHandler} />,
    };

    return routes[rootPath];
    
  }

  return (
    <div className="App">
      <Header navigationChangeHandler={navigationChangeHandler}></Header>


      <main>
        {router(page) || <ErrorPage />}
      </main>

    </div>
  );
}

export default App;
