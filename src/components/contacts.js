import React, { Component } from "react";
import Contact from "./contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john Doe",
        email: "johnDoe@gmail.com",
        phone: "222-222-222",
      },
      {
        id: 2,
        name: "jane Doe",
        email: "janeDoe@gmail.com",
        phone: "111-111-111",
      },
    ],
  };

  deleteContact = (id) => {
    const contactList = [...this.state.contacts];

    const newContact = contactList.filter((contact) => id != contact.id);

    this.setState({
      contacts: newContact,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={() => {
              this.deleteContact(contact.id);
            }}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
