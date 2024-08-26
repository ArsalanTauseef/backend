const { nanoid } = require("nanoid");
const arrayOfContacts = [];

const getData = () => {
  return arrayOfContacts;
};

const addContact = (paramContact) => {
  const addedContacts = {
    id: nanoid(),
    ...paramContact,
  };
  arrayOfContacts.push(addedContacts);
  return addedContacts;
};

const updateContacts = (paramContact) => {
  const returnIndexOfContacts = arrayOfContacts.findIndex(
    (indexOfTheArrayOfContacts) =>
      indexOfTheArrayOfContacts.id === paramContact.id
  );

  arrayOfContacts.splice(returnIndexOfContacts, 1, paramContact);

  return paramContact;
};

const deleteContact = (paramContact) => {
  const returnIndexOfContacts = arrayOfContacts.findIndex(
    (indexOfTheArrayOfContacts) =>
      indexOfTheArrayOfContacts.id === paramContact.id
  );

  arrayOfContacts.splice(returnIndexOfContacts, 1);

  return paramContact;
};


module.exports = {getData, addContact, updateContacts, deleteContact}