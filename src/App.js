import logo from './logo.svg';
import './App.css';
import Addstudent from './component/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from './component/Search';

function App() {
  return (
    <div className="App">
      <Addstudent/>
      <Search/>
    </div>
  );
}

export default App;
