export const CleanSet = data => {
  const sets = data.setlist.map(set => {
    return {
      artist: set.artist.name,
      date: set.eventDate,
      venue: set.venue.name,
      city: set.venue.city.name,
      set: set.sets.set[0] ? set.sets.set[0].song : null
    }
  })
  return sets
}
