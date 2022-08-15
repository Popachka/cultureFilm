import React from 'react';

function PopupCard({ id, title, posters, flag }) {
  const onPopupClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div onClick={onPopupClick} class="popup">
      <div class="popup__film">
        <article class="card popup__card">
          <div class="card__img">
            <img src={require(`../../../img/flags/${flag}`)} class="card__country" />
            <img src={require(`../../../img/posters/${posters}`)} alt="" class="card__poster" />
          </div>
          <h1 class="card__title">{title}</h1>
        </article>
        <div class="popup__shards">
          <div class="popup__shard">.MP4</div>
          <div class="popup__shard">.MP4</div>
          <div class="popup__shard">.MP4</div>
          <span class="popup__text">Озвучка</span>
          <div class="popup__shard">.MP4</div>
          <div class="popup__shard">.MP4</div>
          <div class="popup__shard">.MP4</div>
          <span class="popup__text">Субтитры</span>
        </div>
        <div class="popup__downloading">
          <img src={require(`../../../img/ui/downloading.png`)} alt="" class="" />
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
