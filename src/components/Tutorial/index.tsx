import { FC } from 'react';
import './style.css';

const Tutorial: FC = () => {
  return (
    <section id='tutorial'>
      <h2 className='section__heading'>Фишки CSS</h2>
      <ul className='tutorials-list list-reset'>
        <li className='tutorials-list__item'>
          <h3 className='tutorials-list__heading'>Кастомные свойства</h3>
          <video src={require('../../assets/video/screencast.mp4')} controls width='70%'></video>
        </li>
      </ul>
    </section>
  );
};

export default Tutorial;
