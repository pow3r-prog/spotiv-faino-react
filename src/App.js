import './App.scss'
import { useState } from 'react'
import {
  Navigation,
  Header,
  Home,
  MusicPlayer,
  FavoriteSongs,
  Library,
} from './components'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [songs] = useState([
    {
      title: 'Forget me too ft. Halsey',
      artist: 'Machine Gun Kelly',
      img_src: './images/song-1.jpg',
      src: './music/on-n-on.mp3',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      img_src: './images/song-2.jpg',
      src: './music/somebody-new.mp3',
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      img_src: './images/song-3.jpg',
      src: './music/on-n-on.mp3',
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      img_src: './images/song-4.jpg',
      src: './music/somebody-new.mp3',
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorite' component={FavoriteSongs} />
        <Route path='/library' component={Library} />
      </Switch>
      <MusicPlayer
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default App
