const updateSetlistsReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_SETLISTS':
      return action.setlists;
    default:
      return state;
  }
}

export default updateSetlistsReducer;