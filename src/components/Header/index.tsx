import { FC } from 'react';
import './style.css';

const Header: FC = () => {
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <ul className='nav__list nav-list'>
          <li className='nav-list__item'>
            <a href='#selfie' className='nav-list__link link-reset'>
              Селфи
            </a>
          </li>
          <li className='nav-list__item'>
            <a href='#about' className='nav-list__link link-reset'>
              Обо мне
            </a>
          </li>
          <li className='nav-list__item'>
            <a href='#contacts' className='nav-list__link link-reset'>
              Контакты
            </a>
          </li>
          <li className='nav-list__item'>
            <a href='#tutorial' className='nav-list__link link-reset'>
              Видео
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
