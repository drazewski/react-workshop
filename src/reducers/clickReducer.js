import { CLICKED, SET_CONTACTS, START_LOADING } from '../actions/clickAction';

const clickEvent = (state = {
    people: [],
    clicked: false,
    loading: false,
}, action) => {
  switch (action.type) {
    case CLICKED:
      return {
        ...state,
        clicked: true,
      };
    case SET_CONTACTS:
      return {
        ...state,
        people: action.contacts,
      }
    case START_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};

export default clickEvent;
