import React, { useState } from 'react'
import axios from 'axios'

const SearchPopup = (props) => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: { term: 'all', locale: 'en-US', offset: '0', limit: '6' },
    headers: {
      'x-rapidapi-host': 'shazam.p.rapidapi.com',
      'x-rapidapi-key': 'd1ca8cfc3fmshe98a1e3ec469ac2p1cbe5djsn08b39c9e8fbf',
    },
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data)
      // console.log(response.data.tracks.hits[0])
    })
    .catch(function (error) {
      console.error(error)
    })

  return (
    <div className='search__block'>
      <ul className='result__list'>
        {props.songName.map((elem, index) => (
          <li className='result__list_item' key={index}>
            {elem.name} {elem.lastName}
          </li>
        ))}
        <li className='result__list_item'>{options.params.term}</li>
      </ul>
    </div>
  )
}

export default SearchPopup
