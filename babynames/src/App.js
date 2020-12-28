import './App.css';
import names from './components/Names'
import Favorite from './components/Favorite'
import AllNames from './components/AllNames'
import Input from './components/Input'


function App() {
  return (
    <div style={{marginTop:20}} className="App">
    <h1 style={{color:'hotpink'}}>Baby Name Picker</h1>
    <br/>
    <Input names={names}/>
    <Favorite />
    <AllNames names={names}/>
    </div>
  );
}

export default App;

