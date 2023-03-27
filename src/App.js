import { Routes, Route } from 'react-router-dom'
import AlbumDetail from './pages/AlbumDetail'
import AlbumList from './pages/AlbumList'
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import PostList from './pages/PostList'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/albums/' element={ <AlbumList /> } />
        <Route path='/albums/:slug/' element={ <AlbumDetail /> } />
        <Route path='/posts/' element={ <PostList /> }/>
        <Route path='posts/:slug/' element={ <PostDetail /> } />
    </Routes>
  )
}

export default App;
