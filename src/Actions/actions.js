export const getSet = (artist) => ({
  type: 'GET_SET',
  artist
})

export const displayError = (error) => ({
  type: 'DISPLAY_ERROR',
  error
})
