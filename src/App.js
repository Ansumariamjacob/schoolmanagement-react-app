import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './component/Search';
import Addfaculity from './component/Addfaculity';
import Searchfac from './component/Searchfac';
import ViewStud from './component/ViewStud';
import Viewfac from './component/Viewfac';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Addstudent/>}/>
        <Route path="/f" exact element={<Addfaculity/>}/>
        <Route path="/search" exact element={<Search/>}/>
        <Route path="/searchf" exact element={<Searchfac/>}/>
        <Route path="/view" exact element={<ViewStud/>}/>
        <Route path="/viewf" exact element={<Viewfac/>}/>
      </Routes>
      </BrowserRouter>
      
         </div>
  );
}

export default App;
