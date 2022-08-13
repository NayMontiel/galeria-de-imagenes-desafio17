import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './componets/Header';
import Cards from './componets/Cards';
import Footer from './componets/Footer'

// import de img
import imagen1 from '../src/assets/img/imagen1.jpg'
import imagen2 from '../src/assets/img/imagen2.jpg'
import imagen3 from '../src/assets/img/imagen3.png'
import imagen4 from '../src/assets/img/imagen4.jpg'
import imagen5 from '../src/assets/img/imagen5.jpg'
import imagen6 from '../src/assets/img/imagen6.jpg'
import imagen7 from '../src/assets/img/imagen7.jpg'
import imagen8 from '../src/assets/img/imagen8.jpg'
import imagen9 from '../src/assets/img/imagen9.jpg'


const App = () => {
  const cards = [
    {
      id: 1,
      title: "Vista Del Lago Moraine",
      text: "Ubicado en Ab, Canada.",
      img: imagen1
    },
    {
      id: 2,
      title: "Islandia Aurora Borealis",
      text: "Northern Lights Hermosa.",
      img: imagen2
    },
    {
      id: 3,
      title: "Parque Nacional Canaima",
      text: "El salto Ángel, Venezuela.",
      img: imagen3
    },
    {
      id: 4,
      title: "Hermoso Cocoteros En La Orilla Del Mar",
      text: "Maldives.",
      img: imagen4
    },
    {
      id: 5,
      title: "Cascadas En Medio De árboles Verdes",
      text: "Ubicado en Guadalupe.",
      img: imagen5
    },
    {
      id: 6,
      title: "Fotografia Del Lago Durante El Día",
      text: "Kandergrund, BE, Switzerland.",
      img: imagen6
    },
    {
      id: 7,
      title: "Imponente Puente Golden Gate",
      text: "Ubicado en San Francisco, California.",
      img: imagen7
    },
    {
      id: 8,
      title: "Jardines De La Bahía, Una Ciudad Dentro De Un Jardín",
      text: "Ubicado en Singapur.",
      img: imagen8
    },
    {
      id: 9,
      title: "Panorámica Del Atardecer",
      text: "Ubicado en Rapa Nui, Isla de pascua-Chile",
      img: imagen9
    }
  ];
  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          {
            cards.map(card => (
              <Col md={6} lg={4} className='g-3 p-3'key={card.id}>
                <Cards title={card.title} text={card.text} img={card.img}/>
              </Col>
            ))
          }
        </Row>
      </Container>

      <Footer />

    </div>
  )
}

export default App
