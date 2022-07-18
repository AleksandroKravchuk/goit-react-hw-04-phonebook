import React from 'react';
import PropTypes from 'prop-types';
import { ContactsText, Tel, ButtonDelete } from './ContactItem.styled';

const ContactName = ({ name, tel, id, deleteName }) => (
  <ContactsText>
    {name}: <Tel>{tel}</Tel>
    <ButtonDelete onClick={() => deleteName(id)}>Delete</ButtonDelete>
  </ContactsText>
);
ContactName.propTypes = {
  name: PropTypes.string,
  tel: PropTypes.string,
  id: PropTypes.string,
  deleteName: PropTypes.func,
};
export default ContactName;
