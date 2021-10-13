import './App.scss'
import {
  Navigation,
  Header,
  Home,
  FavoriteSongs,
  Library,
  SongsBase,
  Profile,
  Settings,
} from './components'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route path='/favorite' component={FavoriteSongs} />
        <Route path='/library' component={Library} />
        <Route path='/profile' component={Profile} />
        <Route path='/settings' component={Settings} />
      </Switch>
      <SongsBase />
    </div>
  )
}

export default App
