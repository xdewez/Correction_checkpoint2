import './App.css';
import GameList from './components/GameList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header name="Wild Games"/>
     <GameList />
    </div>
  );
}

export default App;
