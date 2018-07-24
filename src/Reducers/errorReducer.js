const errorReducer = (state = [], action) => {
  switch(action.type) {
    case 'DISPLAY_ERROR':
      return action.error;
    default:
      return state;
  }
}

export default errorReducer; 