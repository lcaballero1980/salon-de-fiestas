// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Header from './componentes/layout/Header';
// import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Contactos from './componentes/paginas/Contactos';
import Home from './componentes/paginas/Home';
import Eventos from './componentes/paginas/Eventos';
import Servicios from './componentes/paginas/Servicios';
import Header from './componentes/layout/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Header /> 
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/eventos" exact element={<Eventos />} />
          <Route path="/Servicios" exact element={<Servicios />} />
          <Route path="/contacto" exact element={<Contactos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
