const getSetReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_SET':
      return action.artist;
    default:
      return state;
  }
}