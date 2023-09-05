import { FC } from 'react';
import './style.css';

const Contacts: FC = () => {
  return (
    <section className='section contacts' id='contacts'>
      <h2 className='section__heading'>Контакты</h2>
      <ul className='contacts-list list-reset'>
        <li className='contacts-list__item'>
          <a
            href='https://github.com/Alisa-Grey/praktikum-test'
            className='contacts-list__link link-reset'
            target='_blank' rel="noreferrer"
          >
            <img
              className='contacts-list__img'
              src={require('../../images/github.png')}
              alt='Иконка GitHub'
            />
            Исходный код проекта
          </a>
        </li>
        <li className='contacts-list__item'>
          <a
            href='https://t.me/alicegrey'
            className='contacts-list__link link-reset'
            target='_blank' rel="noreferrer"
          >
            <img
              className='contacts-list__img'
              src={require('../../images/telegram.png')}
              alt='Иконка Telegram'
            />
            Телеграм
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
