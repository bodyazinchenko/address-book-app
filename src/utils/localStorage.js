export const saveContactsListToLocalStorage = (contacts) => {
  const contactsString = JSON.stringify(contacts);
  localStorage.setItem('contactsList', contactsString);
}

export const getContactsListFromLocalStorage = () => {
  const contactsListString = localStorage.getItem('contactsList');

  if (contactsListString) {
    return JSON.parse(contactsListString);
  } else {
    return [];
  }
}