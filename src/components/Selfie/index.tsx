import React, { useState } from 'react';
import { FC } from 'react';
import './style.css';

const Selfie: FC = () => {
  const [selfieVisible, setselfieVisible] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   setselfieVisible(!selfieVisible)
  }

  return (
    <section className='section selfie'>
      <h2 className='section__heading'>Это я</h2>
      {
        selfieVisible ? (
          <div className='wrap'>
            <figure className='selfie__block'>
              <img className='selfie__img' src={require('../../assets/images/latest_photo.jpg')} alt='Свежее селфи' />
              <figcaption className='selfie__caption'>
                Так я выгляжу сейчас
              </figcaption>
            </figure>
            <button className='selfie__button' onClick={handleClick}>Вернуть мне 2007</button>
          </div>
        )
       :

 (     <div className="wrap">
        <figure className='selfie__block'>
          <img className='selfie__img' src={require('../../assets/images/old_photo.jpg')} alt='Фото первокурсницы' />
          <figcaption className='selfie__caption'>
            А такой я была в 17
          </figcaption>
        </figure>
        <button className='selfie__button' onClick={handleClick}>Назад в будущее!</button>
      </div>)
      }
    </section>
  );
};

export default Selfie;
