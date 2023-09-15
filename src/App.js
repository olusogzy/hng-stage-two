
import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from "./Pages/Home"
import Movie from './Pages/Movie';

function App({id}) {
  
  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/movie/:post_id' element={<Movie />}></Route>
   </Routes>
  );
}

export default App;
