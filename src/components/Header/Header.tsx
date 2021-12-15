import React from 'react';
import './Header.scss';
import c from '../../helpers/constants';
import logo from './../../assets/svgs/likewise-logo.svg';
import search from './../../assets/svgs/searchLW.svg';
import cart from './../../assets/svgs/cartLW.svg';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasket } from '../../selectors/Order';

const Header = () => {
  const basket = useSelector(getBasket);
  return (
    <>
      <Navbar bg="white" variant="light" expand="lg" className="nav-container">
        <Container >
          <Navbar.Brand as={Link} to={c.APP_ROUTES.DASHBOARD}>
            <img src={logo} className="navbar-brand" alt="Likewise-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbarFlex">
              <NavLink to={c.APP_ROUTES.PRODUCTS} className="nav-link" activeClassName="active">Categories</NavLink>
              <NavLink to={c.APP_ROUTES.ORDERS} className="nav-link" activeClassName="active">My Orders</NavLink>
              <NavLink to={c.APP_ROUTES.ABOUT} className="nav-link" activeClassName="active">About</NavLink>
              <NavLink to={c.APP_ROUTES.CONTACT} className="nav-link" activeClassName="active">Contact</NavLink>
              <NavLink to={c.APP_ROUTES.ACCOUNT} className="nav-link" activeClassName="active">My Account</NavLink>
              <NavLink to={c.APP_ROUTES.SEARCH}>
                <img src={search} className="nav-link" alt="Search" />
              </NavLink>
              <NavLink to={c.APP_ROUTES.CART}>
                {basket?.length > 0 && <div className="cart-indicator">{basket.length}</div>}
                <img src={cart} className="" alt="search-icon" />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
