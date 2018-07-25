export const CleanSet = data => {
  const sets = data.setlist.map(set => {
    return (
      <div className='card_div'>
        <h2 className='artist'>{props.artist}</h2>
        <h2 className='venue'>{props.venue}</h2>
        <h2 className='city'>{props.city}</h2>
        <h2 className='date'>{props.date}</h2>
        <ul>{props.setlist}</ul>
      </div>
      <div
        className="card_image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
        }}
      >
        <div className="rating_div">
          <h3 className="card_rating">{vote_average}</h3>
        </div>
      </div>
      {favoriteIds.includes(movie_id) ? deleteButton : favoriteButton}
    </div>
      )
  })
  return sets
}
