import axios from 'axios';
import React, { useMemo } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../../redux/slice/countrySlice';
import { fetchFilms, filterItems } from '../../redux/slice/filmsSlice';
import Card from '../Card';

function FilmsSection() {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => state.search.value);
  const selected = useSelector((state) => state.search.selected);
  const countryItems = useSelector((state) => state.country.countryItems);
  const countryNames = useMemo(() => {
    console.log(countryItems);
    const newItems = countryItems.map((obj) => obj.country);
    return newItems;
  }, [countryItems]);
  const items = useSelector((state) => state.films.items);
  useEffect(() => {
    dispatch(fetchFilms());
  }, []);
  useEffect(() => {
    dispatch(fetchCountry(valueSearch));
  }, [valueSearch]);
  useEffect(() => {
    dispatch(filterItems(countryNames));
  }, [countryItems]);

  return (
    <section className="filmsSection">
      <div className="container films-container">
        {selected === 1 &&
          items &&
          items.map((obj, i) => {
            console.log(obj);
            return <Card key={i} {...obj} />;
          })}
      </div>
    </section>
  );
}

export default FilmsSection;
