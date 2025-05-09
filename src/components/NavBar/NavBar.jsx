import './NavBar.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav >
      <Container className='containerNav'>
        <Link to="/">
          <img src="./img/logonyc.png" alt="" />
        </Link>



        <div className='navLink'>
          <Link to="/Nosotros" className="navbar-brand navBarMe">
            <p>AGENCIAS</p>
          </Link>
          <Link to="/catalogo" className="navbar-brand navBarMe">
            <p>BUSCAR SERVICIOS</p>
          </Link>
          <Link to="/promociones" className="navbar-brand navBarMe">
            <p>PROMOS</p>
          </Link>

        </div>

      </Container>
    </nav>
  );
}

export default NavBar;