import { nanoid } from 'nanoid';
const arrayOfContacts = [];

export const getData = () => {
  return arrayOfContacts;
};

export const addContact = (paramContact) => {
  const addedContacts = {
    id: nanoid(),
    ...paramContact,
  };
  arrayOfContacts.push(addedContacts);
  return addedContacts;
};

export const updateContacts = (paramContact) => {
  const returnIndexOfContacts = arrayOfContacts.findIndex(
    (indexOfTheArrayOfContacts) =>
      indexOfTheArrayOfContacts.id === paramContact.id
  );

  arrayOfContacts.splice(returnIndexOfContacts, 1, paramContact);

  return paramContact;
};

export const deleteContact = (paramContact) => {
  const returnIndexOfContacts = arrayOfContacts.findIndex(
    (indexOfTheArrayOfContacts) =>
      indexOfTheArrayOfContacts.id === paramContact.id
  );

  arrayOfContacts.splice(returnIndexOfContacts, 1);

  return paramContact;
};


// module.exports = {getData, addContact, updateContacts, deleteContact}