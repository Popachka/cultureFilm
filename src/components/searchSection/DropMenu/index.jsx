import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../../../redux/slice/searchSlice';
function DropMenu({ country, flag }) {
  const dispatch = useDispatch();
  const ChooseCountry = (country) => {
    dispatch(setCountry(country));
  };
  return (
    <li onClick={() => ChooseCountry(country)} class="search__flag">
      <img src={require(`../../../img/flags/${flag}`)} alt="" class="search__flag__ico" />
      <span>{country}</span>
    </li>
  );
}

export default DropMenu;
