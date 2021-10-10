import './App.scss'
import {
  Navigation,
  Header,
  Home,
  FavoriteSongs,
  Library,
  SongsBase,
} from './components'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <Switch>
        {/* <Route path='/' component={Home} /> */}
        <Route exact path='/home' component={Home} />
        <Route path='/favorite' component={FavoriteSongs} />
        <Route path='/library' component={Library} />
      </Switch>
      <SongsBase />
    </div>
  )
}

export default App
