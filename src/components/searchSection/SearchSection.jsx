import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, setValueSearch } from '../../redux/slice/searchSlice';
import debounce from 'debounce';
import { useCallback } from 'react';
function SearchSection() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.search);
  const updateSearchValue = useCallback(
    debounce((newValue) => {
      dispatch(setValueSearch(newValue));
    }, 150),
    [],
  );
  const onChangeInput = (e) => {
    const newValue = e.target.value;
    updateSearchValue(newValue);
  };

  return (
    <section className="searchSection">
      <div className="container search-container">
        <h1 className="search__title">Место где вы найдете фильмы нужной культуры</h1>
        <span className="search__subtitle"> Введите название страны </span>
        <div className="search__input">
          {value.length >= 1 ? (
            <svg
              onClick={() => dispatch(clearSearch())}
              className="search__icon"
              height="512px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          ) : (
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="search__icon">
              <defs />
              <title />
              <g data-name="Layer 3" id="Layer_3">
                <path
                  className="cls-1"
                  d="M11,22A10,10,0,1,1,21,12,10,10,0,0,1,11,22ZM11,4a8,8,0,1,0,8,8A8,8,0,0,0,11,4Z"
                />
                <path
                  className="cls-1"
                  d="M28,29.74a3,3,0,0,1-1.93-.7L19.94,23.9a3,3,0,0,1,3.86-4.6l6.13,5.14A3,3,0,0,1,28,29.74ZM21.87,20.6h-.09a1,1,0,0,0-.55,1.77l6.13,5.14a1,1,0,0,0,1.41-.12,1,1,0,0,0,.23-.73,1,1,0,0,0-.36-.68l-6.13-5.15A1,1,0,0,0,21.87,20.6Z"
                />
                <path
                  className="cls-1"
                  d="M20,21a1,1,0,0,1-.64-.23L17,18.82a1,1,0,0,1,1.28-1.54l2.34,1.95a1,1,0,0,1,.13,1.41A1,1,0,0,1,20,21Z"
                />
              </g>
            </svg>
          )}

          <input type="text" value={value} onChange={onChangeInput} placeholder="Russian/Россия" />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
