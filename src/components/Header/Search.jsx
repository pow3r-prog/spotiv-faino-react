import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import SearchPopup from './SearchPopup'

const Search = () => {
    const ref = useRef()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (open && ref.current && !ref.current.contains(e.target)) {
            setOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [open])

    // const [music, setMusic] = useState([])
    // const getMusic = () => {
    //     axios.get('https://shazam.p.rapidapi.com/search')
    //         .then((response) => {
    //             setMusic(response.data)
    //         })
    // }
    // useEffect(() => {
    //     getMusic()
    // }, [])
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: {term: 'kiss the rain', locale: 'en-US', offset: '0', limit: '5'},
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'x-rapidapi-key': 'd1ca8cfc3fmshe98a1e3ec469ac2p1cbe5djsn08b39c9e8fbf'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data)
          console.log(response.data.tracks.hits[0])
      }).catch(function (error) {
          console.error(error)
      })
    return (
        <div className='search__area'>
            <form className='search__form' onClick={() => setOpen(!open)} ref={ref}>
                <input type='text' placeholder='Search song...' className='search__input' />
            </form>
            {open && <SearchPopup />}
        </div>
        
    )
}

export default Search
