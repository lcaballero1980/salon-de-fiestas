//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Contactos from './componentes/paginas/Contactos';
import Home from './componentes/paginas/Home';
import Nosotros from './componentes/paginas/Nosotros';
import Novedades from './componentes/paginas/Novedades';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nosotros" exact element={<Nosotros />} />
          <Route path="/novedades" exact element={<Novedades />} />
          <Route path="/contacto" exact element={<Contactos />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
