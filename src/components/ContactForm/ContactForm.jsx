import React, { Component } from "react";
import styled from 'styled-components';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  onChangeForm = (event) => this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: ''
    });
  }

  render() {
    const { onChangeForm, onSubmit } = this;
    const { name, number } = this.state;

    return (
      <Form onSubmit={onSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Jacob Mercer"
              value={name}
              onChange={onChangeForm}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="123-45-67"
              value={number}
              onChange={onChangeForm}
            />
          </Label>
          <Btm type="submit">Add contact</Btm>
        </Form>
    )
  }
}

const Form = styled.form`
  display: table-caption;
  margin: 12px;
  border: 2px solid grey;
  border-radius: 12px;
  padding: 8px;
`

const Label = styled.label`
  font-size: 20px;
`

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
`

const Btm = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background: darkgray;
  &:hover {
    background: #d3a6a6;
  }

`