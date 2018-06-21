export const CLICKED = 'CLICKED';
export const SET_CONTACTS = 'SET_CONTACTS';
export const START_LOADING = 'START_LOADING';

export const click = () => ({
  type: CLICKED,
});

export const startLoading = () => ({
  type: START_LOADING,
})

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  contacts
});

export const getContacts = (contacts) => {
  return function(dispatch) {
    const loading = setTimeout(() => {
        dispatch(setContacts(contacts));
    }, 5000);

    dispatch(startLoading(loading));
  };
}

