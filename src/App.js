import { Routes, Route } from 'react-router-dom'
import AlbumDetail from './pages/AlbumDetail'
import AlbumList from './pages/AlbumList'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/albums/' element={ <AlbumList /> } />
        <Route path='/albums/:slug/' element={ <AlbumDetail /> } />
    </Routes>
  )
}

export default App;
