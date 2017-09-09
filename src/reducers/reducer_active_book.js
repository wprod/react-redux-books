// THi sstate in not the global state only the one of  the app. this is the state of its reducer
export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
