import React from 'react';

function Card({ country, title, posters, flag }) {
  return (
    <article className="card films__card">
      <div className="card__img">
        <img src={require(`../../img/flags/${flag}`)} alt="" className="card__country" />
        <img src={require(`../../img/posters/${posters}`)} alt="" className="card__poster" />
      </div>
      <h1 className="card__title">{title}</h1>
      <img src={require(`../../img/ui/downloading.png`)} alt="" className="card__download" />
    </article>
  );
}

export default Card;
