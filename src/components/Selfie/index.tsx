import { FC } from 'react';
import './style.css';

const Selfie: FC = () => {
  return (
    <section className='section selfie'>
      <h2 className='section__heading'>Это я</h2>
      <div className='selfie__wrap'>
        <figure className='selfie__block'>
          <img className='selfie__img' src={require('../../images/latest_photo.jpg')} alt='Свежее селфи' />
          <figcaption className='selfie__caption'>
            Так я выгляжу сейчас
          </figcaption>
        </figure>
        <figure className='selfie__block'>
          <img className='selfie__img' src={require('../../images/old_photo.jpg')} alt='Фото первокурсницы' />
          <figcaption className='selfie__caption'>
            А такой я была в 17
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Selfie;
