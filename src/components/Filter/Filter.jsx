import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Filter = ({value, onChange}) => {
  return (
    <Label>Find contacts by name
          <Input
            type="search"
            name="filter"
            placeholder="enter part or all of the name"
            value={value}
            onChange={onChange}
          />
        </Label>
  )
}

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
`

const Label = styled.label`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}