import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from './Section/Section';
import { Form } from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  addName = (name, number) => {
    const nameItem = {
      name,
      id: nanoid(),
      number,
    };
    const normalizedName = name.toLowerCase();
    const chekedName = this.state.contacts.find(item => {
      return item.name.toLowerCase() === normalizedName;
    });
    const chekedTel = this.state.contacts.find(item => {
      return item.number === number;
    });

    if (!chekedName & !chekedTel) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, nameItem],
      }));
      Notify.success(`${name} added in contacts`);
    } else if (chekedName) {
      return Notify.failure(`${name} is already in contacts`);
    }
    if (chekedTel) {
      return Notify.failure(`Number ${number} is already in contacts`);
    }
  };

  onChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };
  getVisibleName = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalazedFilter)
    );
  };
  onDeleteName = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };
  render() {
    const { filter } = this.state;
    const visibleName = this.getVisibleName();

    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addName}></Form>
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} onChange={this.onChange}></Filter>
          <Contacts
            name={visibleName}
            deleteName={this.onDeleteName}
          ></Contacts>
        </Section>
      </div>
    );
  }
}
