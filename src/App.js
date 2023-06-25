import CardsProducts from "./components/CardsProducts/CardsProducts";
import Footer from "./components/Footer/Footer";
import Inicio from "./components/Inicio/Inicio";
import Nav from "./components/Nav/Nav";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import Productos from "./components/Productos/Productos";
import ContactMe from "./components/Contactame/ContactMe"
function App() {
  return (
    <div>
      <Nav/>
      <Inicio/>
      <Productos/>
      <CardsProducts/>
      <ContactMe />
      <PreguntasFrecuentes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
