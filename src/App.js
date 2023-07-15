import gif from './hamster-happy-birthday.gif'
import './App.css';
import Timer from './timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gif}  alt="hamsty" />

        <Timer/>
      </header>
    </div>
  );
}

export default App;
