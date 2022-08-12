import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/slice/filmsSlice';
import PopupCard from './PopupCard';

function Card({ title, posters, flag }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="card-wrap">
      <article className="card films__card">
        <div className="card__img">
          <img src={require(`../../img/flags/${flag}`)} alt="" className="card__country" />
          <img src={require(`../../img/posters/${posters}`)} alt="" className="card__poster" />
        </div>
        <h1 className="card__title">{title}</h1>
        <img
          onClick={() => setOpen(true)}
          src={require(`../../img/ui/downloading.png`)}
          alt=""
          className="card__download"
        />
      </article>
      {open && <PopupCard title={title} posters={posters} flag={flag} />}
    </div>
  );
}

export default Card;
