import React, {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const initialState = {
  mailsData: [],
  filteredMailsData: [],
  filterBy: 'inbox',
  unreadMails: 0,
};

const Store = ({children}) => {
  const [mailsState, dispach] = React.useReducer(Reducer, initialState);

  const mailsContext = React.useMemo(
    () => ({
      mailsState,
      setMails: (data) => {
        dispach({type: 'SET_MAILS', mails: data});
      },
      searchMails: (query) => {
        dispach({type: 'SET_FILTERED_MAILS', query: query});
      },
      addMail: (mail) => {
        dispach({type: 'ADD_MAIL', mail: mail});
      },
      replaceMail: (mail, index) => {
        dispach({type: 'REPLACE_MAIL', mail: mail, index: index});
      },
    }),
    [mailsState],
  );
  return <Context.Provider value={mailsContext}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
