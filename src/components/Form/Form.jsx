import React from 'react';
import { FormName, InputName, Label, Button } from './Form.styled';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onAddInfo = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  hendelSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    if (name === '' || number === '') {
      return;
    }
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <FormName onSubmit={this.hendelSubmit}>
        <Label>
          Name
          <InputName
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onAddInfo}
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
            onChange={this.onAddInfo}
          />
        </Label>{' '}
        <Button type="submit">Add contact</Button>
      </FormName>
    );
  }
}
