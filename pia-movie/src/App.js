import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Rese from './pages/Rese';
import Catalogo from './pages/Catalogo';
import PerfilPage from './pages/PerfilPage';
import { MovieDetails } from './pages/MovieDetails';
import NewPeli from './components/NewPeli' //DIOS MIO YA LLEVAME POR FAVOR TE LO PIDO NO PUEDO CON TANTO



function App() {
  return (
    <div>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/catalogo" element={<Catalogo />} />
          <Route exact path='/movie/:movieId' element={<MovieDetails/>}/>
          <Route exact path="/perfil/:usuarioId" element={<PerfilPage />} />
          <Route exact path="/rese" element={<Rese />} />
          <Route exact path="/new-peli" element={<NewPeli />} />
          
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;

