import React, { Fragment, useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
      </form>
      {filtered !== null ? <p>Hits: {filtered.length}</p> : ''}
    </Fragment>
  );
};

export default ContactFilter;
