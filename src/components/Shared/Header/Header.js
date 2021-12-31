import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../Hook/useFirebase';

const Header = () => {
  const style = {
    fontWeight: "bold",
    color: "#00b9d1"
  }
  const { user, logout } = useAuth()
  return (
    <div className="mt-0 rounded header">

      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home" ><img className="logo" src={logo} alt="" /></Nav.Link>
            <Nav.Link as={Link} to="/home" className="title">Hero Rider</Nav.Link>
            <Nav.Link as={Link} to="/home" className="link">Home</Nav.Link>
            <Nav.Link as={Link} to="/lessons" className="link">Driving Lessons</Nav.Link>
            {
              user.email ?
                <span className="mx-4 px-1 my-0 text-light">Hello, {user.displayName}</span>
                : <p></p>
            }
            {
              user.email ?
                <Nav.Link as={Link} to="/dashboard"><button className="px-4 btn border-0 m-0">Dashboard</button></Nav.Link>
                : <p></p>

            }
            {
              user.email
                ? <button onClick={logout} className="btn btn-warninggit  border-0 ms-2"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                : <Nav.Link as={Link} to="/login" activeStyle={style} className="link"><button className="btn btn-warning m-0"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Login</button></Nav.Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;