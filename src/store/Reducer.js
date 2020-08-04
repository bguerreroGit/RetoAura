const Reducer = (prevState, action) => {
  switch (action.type) {
    case 'SET_MAILS':
      return {
        ...prevState,
        mailsData: action.mails,
        filteredMailsData: action.mails,
        unreadMails: action.mails.filter((mail) => mail.isReaded === false)
          .length,
      };
    case 'SET_FILTER_BY':
      return {
        ...prevState,
        filterBy: action.filterBy,
      };
    case 'SET_FILTERED_MAILS':
      return {
        ...prevState,
        filteredMailsData: prevState.mailsData.filter(
          (mail) =>
            mail.subject.includes(action.query) ||
            mail.body.includes(action.query),
        ),
      };
    case 'ADD_MAIL':
      return {
        ...prevState,
        mailsData: [action.mail, ...prevState.mailsData],
        filteredMailsData: [action.mail, ...prevState.filteredMailsData],
        unreadMails: prevState.unreadMails + 1,
      };
    case 'REMOVE_MAIL':
      return {
        ...prevState,
        filteredMailsData: [
          ...prevState.filteredMailsData.slice(0, action.index),
          ...prevState.filteredMailsData.slice(action.index + 1),
        ],
      };
    case 'REPLACE_MAIL':
      return {
        ...prevState,
        filteredMailsData: [
          ...prevState.filteredMailsData.slice(0, action.index),
          action.mail,
          ...prevState.filteredMailsData.slice(action.index + 1),
        ],
        unreadMails: action.mail.isReaded
          ? prevState.unreadMails - 1
          : prevState.unreadMails + 1,
      };
  }
};

export default Reducer;
