import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './component/Search';
import Addfaculity from './component/Addfaculity';
import Searchfac from './component/Searchfac';

function App() {
  return (
    <div className="App">
      <Addstudent/>
      <Search/>
      <Addfaculity/>
      <Searchfac/>
    </div>
  );
}

export default App;
