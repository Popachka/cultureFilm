import React from 'react';
import { useState } from 'react';

import PopupCard from './PopupCard';

function Card({ id, title, posters, flag }) {
  const [open, setOpen] = useState(false);

  const onClickCard = () => {
    setOpen(true);
  };
  const onOverlayClick = (e) => {
    setOpen(false);

    e.stopPropagation();
  };
  return (
    <div className="card-wrap">
      <article className="card films__card">
        <div className="card__img">
          <img src={require(`../../img/flags/${flag}`)} alt="" className="card__country" />
          <img src={require(`../../img/posters/${posters}`)} alt="" className="card__poster" />
        </div>
        <h1 className="card__title">{title}</h1>
        <img
          onClick={onClickCard}
          src={require(`../../img/ui/downloading.png`)}
          alt=""
          className="card__download"
        />
      </article>
      {open && (
        <div onClick={onOverlayClick} class="popup-fade">
          <PopupCard id={id} title={title} posters={posters} flag={flag} />
        </div>
      )}
    </div>
  );
}

export default Card;
