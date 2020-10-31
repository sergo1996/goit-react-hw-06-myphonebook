import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";

import styles from "./ContactList.module.scss";

import { connect } from "react-redux";

const ContactList = ({ contacts }) => (
  <section>
    {contacts.map((contact) => (
      <ContactListItem
        className={styles.list}
        key={contact.id}
        id={contact.id}
      />
    ))}
  </section>
);

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
