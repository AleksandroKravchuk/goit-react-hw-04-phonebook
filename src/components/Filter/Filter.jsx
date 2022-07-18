import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name{' '}
    <FilterInput type="text" value={value} onChange={onChange}/>
  </Label>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
export default Filter;
