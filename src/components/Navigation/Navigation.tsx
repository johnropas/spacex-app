import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import CONSTANTS from '../../helpers/constants';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="navbar-container container">
          <NavLink exact={true} to={CONSTANTS.APP_ROUTES.HOME} className="navbar-logo">
          </NavLink>
          <div className="menu">
            <ul className="menu-list">
              <NavLink exact={true} to={CONSTANTS.APP_ROUTES.HOME} className="menu-link">
                <li className="menu-item">
                  <div className="menu-item-wrapper">
                    <span className="menu-text">HOME</span>
                  </div>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
