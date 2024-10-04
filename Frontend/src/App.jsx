import './App.css';
import HomePage from './components/Home/HomePage';
import PublicNavbar from './components/Navbar/PublicNavbar';
import CreatePost from './components/Posts/CreatePost';
import PostList from './components/Posts/PostList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import UpdatePost from './components/Posts/UpdatePost';
import PostDetails from "./components/Posts/PostDetails";


function App() {

  return (

    <BrowserRouter>
    <PublicNavbar/>
      <Routes>
      <Route element={<HomePage />} path="/"></Route>
        <Route element={<CreatePost />} path='/create-post'></Route>
        <Route element={<PostList />} path='/posts'></Route>
        <Route element={<PostDetails />} path="/posts/:postId" />
        {/* <Route element={<UpdatePost />} path="/posts/:postId" /> */}
      </Routes>

    </BrowserRouter>

  )
}

export default App
