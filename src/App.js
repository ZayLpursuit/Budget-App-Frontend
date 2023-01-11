
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPage from './Components/NewPage';
import Navbar from './Components/Navbar';
import IndexPage from './Components/IndexPage';
import ShowPage from './Components/ShowPage';
import EditPage from './Components/EditPage';


function App() {
  


  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<IndexPage/>} />
      <Route path='/transactions/:index' element={<ShowPage/>} />
      <Route path='/transactions/:index/edit' element={<EditPage/>} />
      <Route path='/transactions/new' element={<NewPage/>} />
v
    </Routes>
   </Router>
  );
}

export default App;
