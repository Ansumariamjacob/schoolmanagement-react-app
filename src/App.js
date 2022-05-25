import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './component/Search';
import Addfaculity from './component/Addfaculity';

function App() {
  return (
    <div className="App">
      <Addstudent/>
      <Search/>
      <Addfaculity/>
    </div>
  );
}

export default App;
