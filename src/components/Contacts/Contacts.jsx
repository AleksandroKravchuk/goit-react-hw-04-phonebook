import React from 'react';
import PropTypes from 'prop-types';
import { ContactsList, ContactsItem } from './Contacts.styled';
import ContactName from 'components/ContactItem/ContaciItem';

const Contacts = ({ name, deleteName }) => (
  <ContactsList>
    {name.map(item => (
      <ContactsItem key={item.id}>
        <ContactName
          name={item.name}
          tel={item.number}
          id={item.id}
          deleteName={deleteName}
        />
      </ContactsItem>
    ))}
  </ContactsList>
);
Contacts.propTypes = {
  name: PropTypes.arrayOf(PropTypes.exact).isRequired,
  deleteName: PropTypes.func,
};
export default Contacts;
