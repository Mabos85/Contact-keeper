import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import Button from '@material-ui/core/Button';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, current, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    // If theres nothin in current then we want to add a new contact
    if (current === null) {
      if (contact.name !== '') {
        addContact(contact);
      }
    } else {
      updateContact(contact);
    }

    // Clear the form in the component state
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit contact' : 'Add contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        id='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      <label htmlFor='personal'>Personal </label>
      <input
        type='radio'
        name='type'
        id='professional'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <label htmlFor='professional'>Professional </label>
      <div>
        <Button
          variant='contained'
          color='primary'
          fullWidth='true'
          type='submit'>
          {current ? 'Update contact' : 'Add contact'}
        </Button>
      </div>
      {current && (
        <div>
          <br />
          <button className='btn btn-white btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
