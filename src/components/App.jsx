import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from './Section/Section';
import { Form } from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const addName = (name, number) => {
    const nameItem = {
      name,
      id: nanoid(),
      number,
    };
    const normalizedName = name.toLowerCase();

    const chekedName = contacts.find(item => {
      return item.name.toLowerCase() === normalizedName;
    });
    const chekedTel = contacts.find(item => {
      return item.number === number;
    });

    if (!chekedName & !chekedTel) {
      setContacts([...contacts, nameItem]);

      Notify.success(`${name} added in contacts`);
    } else if (chekedName) {
      return Notify.failure(`${name} is already in contacts`);
    }
    if (chekedTel) {
      return Notify.failure(`Number ${number} is already in contacts`);
    }
  };

  const onChange = evt => {
    setFilter(evt.currentTarget.value);
  };
  const getVisibleName = () => {
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalazedFilter)
    );
  };

  const onDeleteName = id => {
    setContacts(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Section title={'Phonebook'}>
        <Form onSubmit={addName}></Form>
      </Section>
      <Section title={'Contacts'}>
        <Filter value={filter} onChange={onChange}></Filter>
        <Contacts name={getVisibleName()} deleteName={onDeleteName}></Contacts>
      </Section>
    </div>
  );
}
