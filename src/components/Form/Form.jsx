import React, { useState } from 'react';
import { FormName, InputName, Label, Button } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddName = evt => {
    const value = evt.target.value;
    setName(value);
  };
  const onAddTel = evt => {
    const value = evt.target.value;
    setNumber(value);
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    if (name === '' || number === '') {
      return;
    }
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormName onSubmit={hendelSubmit}>
      <Label>
        Name
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onAddName}
        />
      </Label>{' '}
      <Label>
        Number
        <InputName
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onAddTel}
        />
      </Label>{' '}
      <Button type="submit">Add contact</Button>
    </FormName>
  );
};
