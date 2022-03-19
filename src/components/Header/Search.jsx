import React, { useState, useEffect, useRef } from 'react'
import SearchPopup from './SearchPopup'
import { data } from './data'

const Search = (props) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [open])

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const filteredMusic = data.filter((item) => {
    return (item.name + ' ' + item.lastName)
      .toLowerCase()
      .includes(input.toLowerCase())
  })

  return (
    <div className='search__area'>
      <form className='search__form' onClick={() => setOpen(!open)} ref={ref}>
        <input
          type='text'
          placeholder='Search song...'
          className='search__input'
          onChange={handleChange}
          value={input}
        />
      </form>
      {open && <SearchPopup songName={filteredMusic} />}
    </div>
  )
}

export default Search
