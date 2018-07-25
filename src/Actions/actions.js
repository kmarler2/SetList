export const getSet = (artist) => ({
  type: 'GET_SET',
  artist
})

export const displayError = (error) => ({
  type: 'DISPLAY_ERROR',
  error
})

export const updateSetlists = (setlists) => ({
  type: 'UPDATE_SETLISTS',
  setlists: setlists
})
