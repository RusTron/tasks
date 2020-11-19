import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className="App-header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink 
              to={'/'}
              exact={true}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ГЛАВНАЯ
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link1'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 1
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link2'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 2
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink 
              to={'/link3'}
              className={'nav__list-link'}
              activeClassName={'nav__active-link'}
            >
              ССЫЛКА 3
            </NavLink>
          </li>
        </ul>
        <button 
          className="nav__button"
        >
          <span className="nav__button-text">ВХОД</span>
        </button>
      </nav>
    </header>
  );
}
